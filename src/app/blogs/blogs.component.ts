import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { blog } from '../model/blog';
import { BlogService } from '../services/blog.service';
import { CreateBlogComponent } from './create-blog/create-blog.component';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css']
})

export class BlogsComponent implements OnInit {

  blogs : blog[] = [];

  constructor(public dialog: MatDialog, private blogService : BlogService ) {
    this.getAllBlogs();
    this.blogService.getBlogById(1);
    this.blogService.blogEmitter.subscribe(result => {
      this.blogs = result;
    });
   }

  ngOnInit(): void {

  }

  // @Input('newBlog') set setNewBlog(blog : any) {
  //   debugger
  //   if (blog === null || blog === undefined) {
  //     return;
  //   }
  //   console.log(blog);
  //   this.blogs.push(blog);
  // }

  editBlog(index : number) {
    const dialogRef = this.dialog.open(CreateBlogComponent,{data : {id : this.blogs[index].id,title : this.blogs[index].title, subtitle : this.blogs[index].subtitle, paragraph : this.blogs[index].paragraph, blogTitle : 'Edit Blog'}});
    // dialogRef.componentInstance.outputBlog.subscribe(result => {
    //   let blog = {
    //     id : result.id,
    //     title : result.title,
    //     subtitle : result.subtitle,
    //     paragraph : result.paragraph,
    //     avatar : result.avatar,
    //     image : result.image,
    //     alternateImage : result.alternateImage
    //   };
    //   this.blogs[index] = blog;
    // });
  }

  getAllBlogs() {
    this.blogService.getAllBlogs();
    this.blogService.blogEmitter.subscribe(result => {
      this.blogs = result;
    });
  }

  getBlogById(id : number) {

  }

  deleteBlog(id : number) {
    this.blogService.deleteBlog(id);
  }
}
