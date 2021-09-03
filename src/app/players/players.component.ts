import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  templateUrl: './players.component.html',
})
export class PlayersComponnet {
  constructor( private router: Router){}
  flag:boolean
  flag2:boolean
team=[]
added(member){
  if(this.team.length==11){
    this.flag=true
  alert('team full') // and route to the team page
  }
  else{
    this.flag2=true
      for(var i=0;i<this.team.length;i++){
       
        if(this.team[i]==member){
          alert('You have already added '+member.name)
          this.flag2=false
          break
        }
        
        
      }
     
     
      
     if(this.flag2==true){
    this.team.push(member)
   alert('added '+ member.name+ ' Players left to add = ' +(11-this.team.length))
     }
  }
}
submitTeam(){
   sessionStorage.setItem('team', JSON.stringify(this.team));
  
  this.router.navigate(['team'])
  
  
}




  players = [
    {
      id: 1,
      name: 'Virat Kohli',
      imageUrl: './assets/images/players/kohli.png',
      role: 'Batsman',
      details:
        'Virat Kohli had a dream. A dream like every other young kid in India to represent the country in the gentleman’s game. It is this vigor and fervor for the game of cricket that has helped this extremely talented young boy from Delhi to scale great heights at a very young age.',
    },
    {
      id: 2,
      name: 'Rohit Sharma',
      imageUrl: './assets/images/players/rohit.png',
      role: 'Batsman',
      details:'Popularly known as the Hitman for his hard hitting skills, Rohit Sharma is a gifted batsman and an immensely talented cricketer who is pleasing on the eye with his elegance and ability to time the ball. Each time Rohit Sharma walks out to bat, the word “talent” features more often than not amongst his fans and the cricketing circles.'
    },
    {
      id: 3,
      name: 'Jasprit Bumrah',
      imageUrl: './assets/images/players/jasprit.png',
      role: 'Bowler',
      details:'MS Dhoni called him the ‘find of the tour’ after the bilateral T20I series against Australia that India won 3-0. For long, India had struggled to find a bowler who could be effective in the death overs.'
    },
    {
      id: 4,
      name: 'Ravindra Jadeja',
      imageUrl: './assets/images/players/ravindra.png',
      role: 'All-rounder',
      details:'He was termed as “The Rockstar” by Shane Warne when Ravindra Jadeja took the Indian Premier League by storm in 2008 with his all-round heroics. An eccentric fielder, a more than handy left-arm spinner and a fearless batsman, Jadeja had all the qualities of a utility cricketer.'
    },
    {
      id: 5,
      name: 'Bhuvaneshwar Kumar',
      imageUrl: './assets/images/players/bhuvaneshwar.png',
      role: 'Bowler',
      details:'Bhuvneshwar Kumar belongs to that breed of bowlers who can swing the ball prodigiously both ways at a decent pace.'
    },
    {
      id: 6,
      name: 'Lokesh Rahul',
      imageUrl: './assets/images/players/lokesh.png',
      role: 'Batsman',
      details:'Young KL Rahul is amongst the most talented opening batsmen in India’s next generation setup. He was a part of Indias squad in the 2010 Under-19 World Cup and made his first-class debut later that year.'
    },
    {
      id: 7,
      name: 'Mohammed Shami',
      imageUrl: './assets/images/players/jasprit.png',
      role: 'Bowler',
      details:'Born in a remote village in Uttar Pradesh, Mohammed Shami was recognized as a special talent and after a tough grind through the ranks, he got his chance to represent Bengal at the Ranji level. After his remarkable performances in domestic cricket, Shami slowly made his way into the international team in 2013 when he made his ODI debut'
    },
    {
      id: 8,
      name: 'Shikhar Dhawan',
      imageUrl: './assets/images/players/shikhar.png',
      role: 'Batsman',
      details:'Behind the earring, the famous twirled moustache and those intricately inked biceps, is a very soft-spoken man – Shikhar Dhawan. From a simple cricket-loving youngster going through the grind of domestic cricket to taking the cricketing world by frenzy by scoring the fastest century on Test debut, Dhawan has come a long way.'
    },
    {
      id: 9,
      name: 'Kuldeep Yadav',
      imageUrl: './assets/images/players/kuldeep.png',
      role: 'Bowler',
      details:'Behind the earring, the famous twirled moustache and those intricately inked biceps, is a very soft-spoken man – Shikhar Dhawan. From a simple cricket-loving youngster going through the grind of domestic cricket to taking the cricketing world by frenzy by scoring the fastest century on Test debut, Dhawan has come a long way.'
    },
    {
      id: 10,
      name: 'Rishabh Pant',
      imageUrl: './assets/images/players/rishabh.png',
      role: 'Wicket-keeper Batsman',
      details:'At a tender age, Rishabh Pant has gone through all the highs and lows of a cricketing career. A promising talent from Delhi, Pant came into the lime-light after his batting heroics for India Under-19 in the 2016 World Cup.'
    },
    {
      id: 11,
      name: 'Yuzevendra Chahal',
      imageUrl: './assets/images/players/yuzevendra.png',
      role: 'Bowler',
      details:'It is not easy for a spinner to find success in the shorter formats of the game where batsmen have the license to smash the ball around.'
    },
    {
      id: 12,
      name: 'Hardik Pandya',
      imageUrl: './assets/images/players/hardik.png',
      role: 'All-rounder',
      details:'If there is one thing that separates Hardik Pandya from other young cricketers, it is his immense self-belief.'
    },
    {
      id: 13,
      name: 'Kedar Jadhav',
      imageUrl: './assets/images/players/kedar.png',
      role: 'All-rounder',
      details:'There is a never a dull moment on the field when Kedar Jadhav is around. There is nothing on the field that he cannot do. If he has kept wicket for Royal Challengers Bangalore in the Indian Premier League, for Team India'
    },
    {
      id: 14,
      name: 'Manish Pandey',
      imageUrl: './assets/images/players/manish.png',
      role: 'Batsman',
      details:'Many a cricketer all around the world has found fame through the IPL. One of them is Manish Pandey. His life changed in one night, one match, one innings – when, as a 19-year-old, he became the first Indian to score a century in the IPL'
    },
    {
      id: 15,
      name: 'Umesh Yadav',
      imageUrl: './assets/images/players/umesh.png',
      role: 'Bowler',
      details:'From the rural parts of Vidharbha, India saw the birth of a genuine fast bowler who could bowl consistently close to 140 kmph. The son of a coal miner, Umesh Yadav took to the game only at the age of 19.'
    },
    {
      id: 16,
      name: 'Wriddiman Sahah',
      imageUrl: './assets/images/players/wriddman.png',
      role: 'Wicket-keeper batsman',
      details:'From the rural parts of Vidharbha, India saw the birth of a genuine fast bowler who could bowl consistently close to 140 kmph. The son of a coal miner, Umesh Yadav took to the game only at the age of 19.'
    },
    {
      id: 17,
      name: 'Cheteshawar Pujara',
      imageUrl: './assets/images/players/cheteshwar.png',
      role: 'Batsman',
      details:'One often relates adjectives like principles, dedication, hardwork and patience to one of India’s batting mainstays - Rahul Dravid. After Dravid hung up his boots, these words found a new meaning in Cheteshwar Pujara'
    },
    {
      id: 18,
      name: 'Ishant Sharma',
      imageUrl: './assets/images/players/ishant.png',
      role: 'Bowler',
      details:'At a time when there was a dearth of genuine fast bowlers in India, Ishant Sharma was like a breath of fresh air as he burst into the limelight with his sharp pace and accurate bowling. You turn back the pages of cricketing history and one would have enduring memories of the lanky bowler making look batting miserable for Ricky Ponting.'
    },
    {
      id: 19,
      name: 'Ravichandran Ashwin',
      imageUrl: './assets/images/players/ravi.png',
      role: 'Bowling all-rounder',
      details:'R Ashwin shot to limelight after an impressive season for the Chennai Super Kings in the India Premier League in 2010. His ability to thrive on crunch situations and bowl with variety caught the eye of the selectors who saw in him a potential to be India’s lead spinner in the future.'
    },
    {
      id: 20,
      name: 'Ajinkya Rahane',
      imageUrl: './assets/images/players/ajinkya.png',
      role: 'Batsman',
      details:'Ajinkya Rahane is an example of a batsman from the traditional mould with a typical script of a Mumbai lad with a dream of making it big in the game of cricket. Like most Mumbai boys, Rahane too had a unique love for cricket and the childhood dream of representing the country one day.'
    },
  ];
}
