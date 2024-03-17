export class Villager {
  name: string = '';
  birthday: string = '';
  loves: string[] | null = [];
  likes: string[] | null = [];
  neutral: string[] | null = [];
  dislikes: string[] | null = [];
  hates: string[] | null = [];

  constructor(
    name: string, 
    birthday: string, 
    loves: string[] | null, 
    likes: string[] | null, 
    neutral: string[] | null, 
    dislikes: string[] | null, 
    hates: string[] | null
  ) {
    this.name = name;
    this.birthday = birthday;
    this.loves = loves;
    this.likes = likes;
    this.neutral = neutral;
    this.dislikes = dislikes;
    this.hates = hates;
  }
}