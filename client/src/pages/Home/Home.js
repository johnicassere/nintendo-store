import Banner from '../../components/Banner/Banner';
import Search from '../../components/Search/Search';
import CardContainer from '../../components/CardContainer/CardContainer';
import Card from '../../components/Card/Card';

export default function Home() {
  return (
    <>
      <Banner 
        image='https://assets.nintendo.com/image/upload/c_pad,f_auto,h_432,q_auto,w_768/ncom/en_US/games/switch/l/life-is-strange-true-colors-switch/hero' 
        age='16'
        info='Violência, drogas'
      />
      <Search />
      <CardContainer title='Jogos'>
        <Card 
          image='https://assets.nintendo.com/image/upload/c_pad,f_auto,h_613,q_auto,w_1089/ncom/pt_BR/games/switch/s/super-smash-bros-ultimate-switch/hero?v=2021111809'
          title='Super Smash Bros.™ Ultimate'
          price='299.00'
        />
        <Card 
          image='https://assets.nintendo.com/image/upload/c_pad,f_auto,h_613,q_auto,w_1089/ncom/pt_BR/games/switch/s/super-smash-bros-ultimate-switch/hero?v=2021111809'
          title='Super Smash Bros.™ Ultimate'
          price='299.00'
        />
        <Card 
          image='https://assets.nintendo.com/image/upload/c_pad,f_auto,h_613,q_auto,w_1089/ncom/pt_BR/games/switch/s/super-smash-bros-ultimate-switch/hero?v=2021111809'
          title='Super Smash Bros.™ Ultimate'
          price='299.00'
        />
        <Card 
          image='https://assets.nintendo.com/image/upload/c_pad,f_auto,h_613,q_auto,w_1089/ncom/pt_BR/games/switch/s/super-smash-bros-ultimate-switch/hero?v=2021111809'
          title='Super Smash Bros.™ Ultimate'
          price='299.00'
        />
        <Card 
          image='https://assets.nintendo.com/image/upload/c_pad,f_auto,h_613,q_auto,w_1089/ncom/pt_BR/games/switch/s/super-smash-bros-ultimate-switch/hero?v=2021111809'
          title='Super Smash Bros.™ Ultimate'
          price='299.00'
        />
      </CardContainer>
    </>
  )
}