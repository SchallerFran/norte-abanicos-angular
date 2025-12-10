import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,              
  imports: [RouterOutlet, CommonModule],    
  templateUrl: './app.html',       
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('clase-1');

  logoURL = "/Logo.svg";

  fondoAbout = "/fondoAboutUs.webp";

  fondoPresentacion = "/abanicos-fondo.webp";

  productos = [
  {
    nombre: "Abanico Venom Green Standard",
    precio: 19000,
    imagen: "productos/Abanico Venom Green Standard.jpg",
    descripcion: "Diseño Venom Green con varillas reforzadas. Ideal para uso intensivo."
  },
  {
    nombre: "Abanico Signal Nova Standard",
    precio: 19000,
    imagen: "productos/Abanico Signal Nova Standard.jpg",
    descripcion: "Modelo Signal Nova, diseño moderno y vibrante."
  },
  {
    nombre: "Abanico Dimensión Pink Standard",
    precio: 19000,
    imagen: "productos/Abanico Dimensión Pink Standard.jpg",
    descripcion: "Edición Dimensión Pink, ideal para estilo urbano."
  },
  {
    nombre: "Abanico Agite Carnaval Standard",
    precio: 20000,
    imagen: "productos/Abanico Agite Carnaval Standard.jpg",
    descripcion: "Edición Carnaval, con colores intensos y estructura premium."
  },
  {
    nombre: "Abanico Gloria Original Standard",
    precio: 21500,
    imagen: "productos/Abanico Gloria Original Standard.jpg",
    descripcion: "Modelo Gloria Original, clásico y elegante."
  },
  {
    nombre: "Abanico Weave Black Standard",
    precio: 19000,
    imagen: "productos/Abanico Weave Black Standard.jpg",
    descripcion: "Modelo Weave Black, diseño minimalista y resistente."
  },
  {
    nombre: "Abanico Movimiento Neón XL",
    precio: 25000,
    imagen: "productos/Abanico Movimiento Neón XL.jpg",
    descripcion: "Edición XL con diseño Neón, máxima amplitud de aire."
  },
  {
    nombre: "Abanico Manos Neón XL",
    precio: 25000,
    imagen: "productos/Abanico Manos Neón XL.jpg",
    descripcion: "Modelo XL Manos Neón, potente y llamativo."
  }
];

  productoSeleccionado: any = null;

  abrirProducto(producto: any) {
    this.productoSeleccionado = producto;
  }

  cerrarProducto() {
    this.productoSeleccionado = null;
  }

  @ViewChild('carousel') carousel!: ElementRef;

  scrollRight() {
    const el = this.carousel.nativeElement;
    const maxScroll = el.scrollWidth - el.clientWidth;
    if (el.scrollLeft >= maxScroll - 10) {
      el.scrollTo({ left: 0, behavior: 'smooth' });
    } 
    else {
      el.scrollBy({ left: 300, behavior: 'smooth' });
    }
  }

  scrollLeft() {
    const el = this.carousel.nativeElement;
    if (el.scrollLeft <= 10) {
      const maxScroll = el.scrollWidth - el.clientWidth;
      el.scrollTo({ left: maxScroll, behavior: 'smooth' });
    } 
    else {
      el.scrollBy({ left: -300, behavior: 'smooth' });
    }
  }

  scrollTo(id: string, offset = 78) {
    const el = document.getElementById(id);
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.pageYOffset - offset;
    window.scrollTo({ top, behavior: 'smooth' });
  }
}
