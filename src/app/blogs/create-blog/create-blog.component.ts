import { Component, EventEmitter, Inject, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { blog } from 'src/app/model/blog';
import { BlogService } from 'src/app/services/blog.service';

@Component({
  selector: 'app-create-blog',
  templateUrl: './create-blog.component.html',
  styleUrls: ['./create-blog.component.css']
})
export class CreateBlogComponent implements OnInit {

  blogForm : FormGroup ;

  @Output() outputBlog:EventEmitter<any>= new EventEmitter();

  blog : blog ;
  blogTitle : string = "Create Blog"

  constructor(private blogService : BlogService, public dialogRef: MatDialogRef<CreateBlogComponent>,@Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
    this.blogForm = new FormGroup({
      title : new FormControl(this.data.title),
      subtitle : new FormControl(this.data.subtitle),
      paragraph : new FormControl(this.data.paragraph)
    });
    this.blogTitle = this.data.blogTitle;
  }

  onSave() {

    // debugger
    this.blog = {
      id : this.data.id,
      avatar : "assets/test.jpg",
      image : "assets/test.jpg",
      alternateImage : "test.jpg",
      title : this.blogForm.value.title,
      subtitle : this.blogForm.value.subtitle,
      paragraph : this.blogForm.value.paragraph
    }
    if(this.data.id !== undefined && this.data.id > 0) {
      this.blogService.editBlog(this.data.id,this.blog);
      this.dialogRef.close();
      return;
    }
    console.log(this.blog);
    this.blogService.addBlog(this.blog);
    // this.outputBlog.emit(this.blog);

    console.log(this.blogForm.value.title);
    this.dialogRef.close();
  }

}
