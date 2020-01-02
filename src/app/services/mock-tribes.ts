import { Tribe } from '../modules/application/models/tribe';
import { Member } from '../modules/application/models/member';

export const TRIBES: Tribe[] = [
  {
    id: 1,
    members: [],
    tribePicture: 'assets/img/famille_ferreira.jpg',
    name: 'Famille Ferreira',
    resume: 'Une famille aussi formidable que grande !',
    // tslint:disable-next-line: max-line-length
    description: 'Toute la famille Ferreira sur 4 générations ! Les grands-parents, les parents, oncles et tantes, cousines et cousins, enfants, nièces et neuveux...Tout ce beau petit monde est réuni au sein de cette tribu MyTribe !'
  },
  {
    id: 2,
    members: [],
    tribePicture: '/assets/img/photo_keupins.jpg',
    name: 'Les Keupins',
    resume: 'Notre belle bande de dégénérés !',
    // tslint:disable-next-line: max-line-length
    description: '"L\'amitié est toujours une douce responsabilité, jamais une opportunité." - Khalil Gibran'
  },
  {
    id: 3,
    members: [],
    tribePicture: 'assets/img/2.jpg',
    name: 'Les Inséparables',
    resume: 'Ceux qui sont là depuis toujours ...',
    // tslint:disable-next-line: max-line-length
    description: '"Ca doit être ça les vrais amis. Ceux qui restent même quand on part, qu\'on retrouve en revenant, une semaine, un mois, un an, cinq ans après." - Agnès Ledig'
  },
];
