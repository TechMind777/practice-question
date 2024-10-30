/**
 * 
 The most significant advantage is the performance improvement. Angular can now track and update only the items that have changed, reducing unnecessary DOM manipulation and improving rendering speed, especially when dealing with large lists

@Component({
  selector: 'list',
  standalone: true,
  imports: [NgFor],
  template: `
    <div *ngFor="let photo of photos; trackBy: trackById"> // 👈
      {{ photo.name }}
      <img [src]="photo.url" [alt]="photo.name" />
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListComponent {
  @Input() photos!: Photo[];

  trackById(index: number, photo: Photo) { // 👈
    return photo.id;
  }
}
 */