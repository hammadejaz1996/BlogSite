import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CreateBlogComponent } from './create-blog/create-blog.component';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css']
})
export class BlogsComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  @Input('newBlog') set setNewBlog(blog : any) {
    debugger
    if (blog === null || blog === undefined) {
      return;
    }
    console.log(blog);
    this.blogs.push(blog);
  }

  editBlog(index : number) {
    const dialogRef = this.dialog.open(CreateBlogComponent,{data : {title : this.blogs[index].title, subtitle : this.blogs[index].subtitle, paragraph : this.blogs[index].paragraph, blogTitle : 'Edit Blog'}});
    dialogRef.componentInstance.outputBlog.subscribe(result => {
      let blog = {
        title : result.title,
        subtitle : result.subtitle,
        paragraph : result.paragraph,
        avatar : result.avatar,
        image : result.image,
        alternateImage : result.alternateImage
      };
      this.blogs[index] = blog;
    });
  }
  blogs = [
    {
      avatar : "assets/test.jpg",
      title : "hammad",
      subtitle : "Hammad Ejaz",
      image : "assets/test.jpg",
      paragraph :"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      alternateImage : "test.jpg"
    },
    {
      avatar : "assets/test.jpg",
      title : "hammad",
      subtitle : "Hammad Ejaz",
      image : "assets/test.jpg",
      paragraph : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      alternateImage : "test.jpg"
    },
    {
      avatar : "assets/test.jpg",
      title : "hammad",
      subtitle : "Hammad Ejaz",
      image : "assets/test.jpg",
      paragraph : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      alternateImage : "test.jpg"
    },
    {
      avatar : "assets/test.jpg",
      title : "hammad",
      subtitle : "Hammad Ejaz",
      image : "assets/test.jpg",
      paragraph : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      alternateImage : "test.jpg"
    },
    {
      avatar : "assets/test.jpg",
      title : "hammad",
      subtitle : "Hammad Ejaz",
      image : "assets/test.jpg",
      paragraph : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      alternateImage : "test.jpg"
    },
    {
      avatar : "assets/test.jpg",
      title : "hammad",
      subtitle : "Hammad Ejaz",
      image : "assets/test.jpg",
      paragraph : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      alternateImage : "test.jpg"
    }
  ]
}
