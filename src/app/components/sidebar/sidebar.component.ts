import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})

export class SidebarComponent implements OnInit{

  public items!: string[]

  // data depuis BODY
  @Input() currentPath!: string

  ngOnInit(): void{

    console.log('current path : ', this.currentPath)

    if(this.currentPath === 'angular'){
      this.items  = [
        'introduction',
        'component',
        'template',
        'directives',
        'pipes',
        'services',
        'routing',
        'exercices'
      ]
    } else if (this.currentPath === 'github'){
      this.items  = [
        'github page',
      ]
    } else  if (this.currentPath === 'algorithmique'){
      this.items  = [
        'chapitre 1 : Le rôle de l\'algorithmiques',
      ]
    }

  }
}
