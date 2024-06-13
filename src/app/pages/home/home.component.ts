import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { BlogService } from 'src/app/services/blog.service';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  posts: any = [];
  destroy: Subject<boolean> = new Subject<boolean>();
  constructor(private blogs: BlogService) { }

  ngOnInit(): void {
    this.getBlogs();
  }

  ngOnDestroy() {
    this.destroy.next();
    this.destroy.complete();
  }

  getBlogs(): void {
    this.blogs.getBlogs().pipe(takeUntil(this.destroy)).subscribe((data) => {
      this.posts = data;
      console.log(data);
    });
  }

}
