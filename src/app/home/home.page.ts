import { Component } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { WebView } from '@ionic-native/ionic-webview/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  image:string;
  listaImage:any = [];
  imageData:any
  isImage:Boolean = false
  constructor(private camera: Camera,
              private webView: WebView,) {}

  takePictureFront() {

    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      sourceType: this.camera.PictureSourceType.CAMERA
    };
    console.log("this.camera",this.camera);
    console.log("this.image",this.image);
    this.camera.getPicture(options)
    .then((imageData) => {
      this.image = this.webView.convertFileSrc(imageData);
      this.imageData = imageData
    }, (err) => {
      console.log(err);
    })
  }

  uploadImages(){
    if (this.imageData) {
      
      this.listaImage.push(this.imageData);
      this.isImage = true;

    }else{
      console.log("no hay imagen")
    }
  }
  
}



