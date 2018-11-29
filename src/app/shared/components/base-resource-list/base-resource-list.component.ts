import { OnInit, Injector } from '@angular/core';

import { BaseResourceModel } from '../../models/base-resource.model';
import { BaseResourceService } from '../../services/base-resource.service';

export abstract class BaseResourceListComponent<T extends BaseResourceModel>
  implements OnInit {
  resource: T[] = [];
  constructor( protected resourceService: BaseResourceService<T>) {}

  ngOnInit() {
    this.resourceService
      .getAll()
      .subscribe(
        resource => (this.resource = resource),
        error => alert('Erro ao carregar a lista')
      );
  }

  deleteResource(resource: T) {
    const mustDelet = confirm('Deseja realmente excluir este item?');

    if (mustDelet) {
      this.resourceService
        .delete(resource.id)
        .subscribe(
          () =>
            (this.resource = this.resource.filter(
              element => element !== resource
            )),
          () => alert('Erro ao tentar excluir')
        );
    }
  }
}
