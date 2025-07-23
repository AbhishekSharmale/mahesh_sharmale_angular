import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-hero-section',
  templateUrl: './hero-section.component.html',
  styleUrls: ['./hero-section.component.scss']
})
export class HeroSectionComponent implements OnInit {
  @Input() currentLang: string = 'mr'; // Default to Marathi
  
  ngOnInit() {
    // Initialize particles and star background on component load
    this.createParticles();
    this.createStars();
    
    // Add parallax effect for 3D elements
    document.addEventListener('mousemove', this.handleParallax);
  }
  
  scrollToSection(sectionId: string) {
    // Implement smooth scrolling to any section
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }
  
  private handleParallax(e: MouseEvent) {
    const shapes = document.querySelectorAll('.triangle, .square, .circle');
    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;
    
    shapes.forEach((shape: Element) => {
      const speed = shape.classList.contains('triangle') ? 20 : 
                    shape.classList.contains('square') ? 15 : 10;
      
      const xOffset = (0.5 - x) * speed;
      const yOffset = (0.5 - y) * speed;
      
      (shape as HTMLElement).style.transform = 
        `perspective(1000px) translate3d(${xOffset}px, ${yOffset}px, 0) rotateX(${yOffset/2}deg) rotateY(${-xOffset/2}deg)`;
    });
  }
  
  private createParticles() {
    const container = document.getElementById('particles-container');
    if (!container) return;
    
    const particleCount = 30;
    
    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement('div');
      particle.className = 'particle';
      
      // Random size between 2-6px
      const size = Math.random() * 4 + 2;
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      
      // Random position
      particle.style.left = `${Math.random() * 100}%`;
      particle.style.top = `${Math.random() * 100}%`;
      
      // Random opacity
      particle.style.opacity = (Math.random() * 0.5 + 0.1).toString();
      
      // Random animation
      const duration = Math.random() * 20 + 10;
      const delay = Math.random() * 10;
      particle.style.animation = `float-slow ${duration}s ease-in-out ${delay}s infinite alternate`;
      
      container.appendChild(particle);
    }
  }
  
  private createStars() {
    const starBg = document.getElementById('star-bg');
    if (!starBg) return;
    
    const starCount = 50;
    
    for (let i = 0; i < starCount; i++) {
      const star = document.createElement('div');
      star.className = 'star';
      
      // Random size
      if (Math.random() > 0.7) {
        star.classList.add('medium');
      } else if (Math.random() > 0.9) {
        star.classList.add('large');
      }
      
      // Random position
      star.style.left = `${Math.random() * 100}%`;
      star.style.top = `${Math.random() * 100}%`;
      
      // Random opacity
      star.style.opacity = (Math.random() * 0.8 + 0.2).toString();
      
      starBg.appendChild(star);
    }
  }
}