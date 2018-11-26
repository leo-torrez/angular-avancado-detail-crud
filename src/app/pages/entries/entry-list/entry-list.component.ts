import { Component, OnInit } from '@angular/core';
import { EntryService } from '../shared/entry.service';
import { Entry } from '../shared/entry.model';

@Component({
  selector: 'app-entry-list',
  templateUrl: './entry-list.component.html',
  styleUrls: ['./entry-list.component.scss']
})
export class EntryListComponent implements OnInit {
  entries: Entry[] = [];
  constructor(private entryService: EntryService) {}

  ngOnInit() {
    this.entryService
      .getAll()
      .subscribe(
        entries => (this.entries = entries),
        error => alert('Erro ao carregar a lista')
      );
  }

  deleteEntry(entry: Entry) {
    const mustDelet = confirm('Deseja realmente excluir este item?');

    if (mustDelet) {
      this.entryService
        .delete(entry.id)
        .subscribe(
          () =>
            (this.entries = this.entries.filter(
              element => element !== entry
            )),
          () => alert('Erro ao tentar excluir')
        );
    }
  }

}
