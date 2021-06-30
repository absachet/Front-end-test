import { Component, OnInit } from '@angular/core';
import { Globals } from 'src/app/services/globals';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  public navigations: MenuComponent.Nav[];
  public configs: MenuComponent.Nav[];

  constructor(public globals: Globals) {
    this.navigations = [
      {
        icon: "../../../assets/Home.svg",
        title: "Teste Audaces",
        active: true,
        function: null
      },
      {
        icon: "../../../assets/placeholder1.svg",
        title: "Exemplo 1",
        active: false,
        function: null
      },
      {
        icon: "../../../assets/placeholder2.svg",
        title: "Exemplo 2",
        active: false,
        function: null
      },
      {
        icon: "../../../assets/placeholder3.svg",
        title: "Exemplo 3",
        active: false,
        function: null
      }
    ];

    this.configs = [
      {
        icon: "../../../assets/theme.svg",
        title: "Trocar de tema",
        active: false,
        function: () => this.changeMode()
      },
      {
        icon: "../../../assets/username.svg",
        title: "Username",
        active: false,
        function: null
      }
    ];
  }

  ngOnInit(): void {
  }

  public changeMode(): void {
    this.globals.darkMode = !this.globals.darkMode;
  }
}

export namespace MenuComponent {
  export interface Nav {
    icon: string,
    title: string,
    active: boolean,
    function: any
  }
}
