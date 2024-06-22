import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-masonry-sample',
  standalone: true,
  templateUrl: './masonry-sample.component.html',
  styleUrls: ['./masonry-sample.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MasonrySampleComponent { }
