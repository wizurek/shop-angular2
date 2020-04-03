import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpClientService} from '../../../http-client.service';
import {UserStorageService} from '../../../user-storage.service';
import {User} from '../User';


@Component({
  selector: 'app-editor-users',
  templateUrl: './editorUsers.component.html',
  styleUrls: ['./editorUsers.component.css']
})
export class EditorUsersComponent implements OnInit {

  constructor(private userStorage: UserStorageService, private router: Router,
              private activeRoute: ActivatedRoute, private httpClient: HttpClientService) {
  }

  user: User = new User();

  ngOnInit(): void {
    this.getUserToEdit();
  }


  saveUser(user: User) {
    this.httpClient.saveUser(user).subscribe(r => {
      this.router.navigate(['/shop/users']);
    });


  }

  getUserToEdit() {
    this.activeRoute.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id) {
        this.httpClient.getUser(Number.parseInt(id)).subscribe(p => this.user = p);
      }

    });
  }
}
