import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Category } from './pages/categories/shared/category.model';
import { Entry } from './pages/entries/shared/entry.model';

export class InMemoryDatabase implements InMemoryDbService {
  createDb() {
    const categories: Category[] = [
      {
        id: 1,
        name: 'Moradia',
        description: 'Pagamentos de contas da Casa'
      },
      {
        id: 2,
        name: 'Sáude',
        description: 'Plano de Saúde e Remédios'
      },
      {
        id: 3,
        name: 'Lazer',
        description: 'Cinema, parque, praia'
      },
      {
        id: 4,
        name: 'Salário',
        description: 'Recebimento de Salário'
      },
      {
        id: 5,
        name: 'Freelas',
        description: 'Trabalhos como freelancer'
      }
    ];

    const entries: Entry[] = [
      {
        id: 1,
        name: 'Gás de Cozinha',
        categoryId: categories[0].id,
        category: categories[0],
        paid: true,
        date: '14/10/2018',
        amount: '70,80',
        type: 'expense',
        description: 'Despesa de Gás'
      } as Entry,
      {
        id: 2,
        name: 'Internet',
        categoryId: categories[0].id,
        category: categories[0],
        paid: true,
        date: '16/10/2018',
        amount: '200,80',
        type: 'expense',
        description: 'Despesa de Internet'
      } as Entry,
      {
        id: 3,
        name: 'Valor salário',
        categoryId: categories[4].id,
        category: categories[4],
        paid: true,
        date: '17/10/2018',
        amount: '3000,80',
        type: 'revenue',
        description: 'Recebimento Salário'
      } as Entry
    ];

    return { categories, entries };
  }
}
