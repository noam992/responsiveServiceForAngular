import { ScreenSizeService } from './../../sevices/screen-size.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {

  public screenSize: string;

  constructor(private myScreenSizeService: ScreenSizeService) { }

  ngOnInit(): void {

    // Get current screen size
    this.screenSize = this.myScreenSizeService.currentSize

    // Subscribe to streaming update of screen size, update changes 
    this.myScreenSizeService.sizeScreenCalled$.subscribe(whichSizeIs => {
      this.screenSize = whichSizeIs;
    });

  }
  
}
