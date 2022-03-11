import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CreateBlogComponent } from './blogs/create-blog/create-blog.component';
import { blog } from './model/blog';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title : string = 'blog-site';
  name : string = '';
  headerSelected : String = 'Login';
  blog : any;

  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {
  }

  GetOutputFromChild(data : string) {
    this.name = data;
  }

  selectedHeader(headerName : any) {
    this.headerSelected = headerName.textContent;
    console.log(this.headerSelected);
  }

  // GetBlog(blog : any) {
  //   this.blog = blog;
  //   console.log("Get Block clicked");
  //   console.log(blog);
  // }

  openDialog() {
    const dialogRef = this.dialog.open(CreateBlogComponent,{data : {title : '', subtitle : '', paragraph : '', blogTitle : 'Create Blog'}});
    dialogRef.componentInstance.outputBlog.subscribe(result => {
      this.blog = {
        id : result.id,
        title : result.title,
        subtitle : result.subtitle,
        paragraph : result.paragraph,
        avatar : result.avatar,
        image : result.image,
        alternateImage : result.alternateImage
      }
    });
  }
}
