import { Component } from '@angular/core';

@Component({
  selector: 'app-triangles',
  templateUrl: './triangles.component.html',
  styleUrls: ['./triangles.component.sass']
})

export class TrianglesComponent {
  private x = Math.random() * 100 + '%';
  private y = Math.random() * 100 + '%';
  private size = Math.random() * (30 - 2) + 2 + 'rem';
  private opacity = Math.random() * (0.25 - 0.05) + 0.05;
  private rotateZ = 'rotateZ(' + Math.round(Math.random() * 360) + 'deg)';
  private filter = 'hue-rotate(' + Math.round(Math.random() * 360) + 'deg)';
  private randomBool = Math.random() >= 0.5;
  private animationDuration = Math.random() * (10 - 5) + 5 + 's';
}
