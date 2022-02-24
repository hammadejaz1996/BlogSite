import { Component, EventEmitter, Inject, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { blog } from 'src/app/model/blog';

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

  constructor( public dialogRef: MatDialogRef<CreateBlogComponent>,@Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
    this.blogForm = new FormGroup({
      title : new FormControl(this.data.title),
      subtitle : new FormControl(this.data.subtitle),
      paragraph : new FormControl(this.data.paragraph)
    });
    this.blogTitle = this.data.blogTitle;
  }

  onSave() {

    debugger
    this.blog = {
      avatar : "assets/test.jpg",
      image : "assets/test.jpg",
      alternateImage : "test.jpg",
      title : this.blogForm.value.title,
      subtitle : this.blogForm.value.subtitle,
      paragraph : this.blogForm.value.paragraph
    }
    console.log(this.blog);
    this.outputBlog.emit(this.blog);

    console.log(this.blogForm.value.title);
    this.dialogRef.close();
  }

}
