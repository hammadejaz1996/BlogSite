import { HttpClient } from '@angular/common/http';
import { Injectable, Output, EventEmitter } from '@angular/core';
import { environment } from 'src/environments/environment';
import { blog } from '../model/blog';

const BLOGS_URL = environment.baseUrl + "/blogs";

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  @Output() blogEmitter : EventEmitter<blog[]> = new EventEmitter<blog[]>();
  blogs : blog[] = [];
  constructor(private http : HttpClient) { }

  getAllBlogs() : blog[] {
    this.http.get(BLOGS_URL).subscribe(result => {
      this.blogs = result as blog[];
      console.log(this.blogs);
      console.log(result);
      this.blogEmitter.emit(this.blogs);
    });
    return this.blogs;
  }

  getBlogById(id : number) : blog {
    let singleBlog : any = {};
    this.http.get(BLOGS_URL + "/" + id).subscribe(result => {
      singleBlog = result as blog;
    });
    return singleBlog;
  }

  addBlog(addBlog : blog) {
    console.log(addBlog);
    this.http.post(BLOGS_URL,addBlog).subscribe(result => {
      console.log(result);
      console.log("Blog Added Successfully");
    });
  }

  editBlog(id : number, editBlog : blog) {
    console.log(editBlog);
    let url = BLOGS_URL + "/" + id;
    this.http.put(url,editBlog).subscribe(result => {
      console.log(result);
      console.log("Blog edited Successfully");
      // this.blogs.forEach(x => {
      //   if(x.id === id) {
      //     debugger
      //     x = editBlog;
      //     this.blogEmitter.emit(this.blogs);
      //   }
      // })
      for(let i = 0; i < this.blogs.length; i++) {
        if (this.blogs[i].id === id) {
          this.blogs[i] = editBlog;
          console.log(this.blogs[i]);
          break;
        }
      }
    })
  }

  deleteBlog(id : number) {
    let url = BLOGS_URL + "/" + id;
    this.http.delete(url).subscribe(result => {
      console.log(result);
      for(let i = 0; i < this.blogs.length; i++) {
        if (this.blogs[i].id === id) {
          this.blogs.splice(i,1);
          this.blogEmitter.emit(this.blogs);
          console.log(this.blogs[i]);
          break;
        }
      }
    })
  }

}
