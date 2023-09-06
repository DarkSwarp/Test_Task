import {
  Title,
  Section,
  Text,
  Conteiner,
  TextForIcon,
  Wrap,
  Img,
} from './Home.styled'; 

export default function Home() {
  return (
    <Conteiner>
      <Section>
        <Wrap>
          <Img
            src="https://auto-time.com.ua/wp-content/uploads/2021/09/1.svg "
            alt="Img"
          />
          <TextForIcon>Reliable and comfortable cars</TextForIcon>
        </Wrap>
        <Wrap>
          <Img
            src="https://auto-time.com.ua/wp-content/uploads/2021/09/2.svg  "
            alt="Img"
          />
          <TextForIcon>We are always available, 24/7</TextForIcon>
        </Wrap>
        <Wrap>
          <Img
            src="https://auto-time.com.ua/wp-content/uploads/2021/09/3.svg  "
            alt="Img"
          />
          <TextForIcon>Address delivery of the car</TextForIcon>
        </Wrap>
      </Section>
      <Section>
        <img
          src="https://auto-time.com.ua/wp-content/uploads/2021/04/ride.png"
          alt=""
          width="800px"
        />
        <div>
          <Title>Car rental is reliable, comfortable and profitable!</Title>
          <Text>
            Rent for a business meeting, for vacation, in case of repairs your
            car and simply for comfortable movement at any time.
          </Text>
          <Text>
            The car can be chosen and reserved online for the desired period at
            any convenient time, from a few hours to several months.
          </Text>
        </div>
      </Section>
    </Conteiner>
  );
}
