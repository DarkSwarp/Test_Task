import {
  Title,
  Section,
  Text,
  Conteiner,
  TextForIcon,
  Wrap,
  Img,
} from './Favorites.styled';

export default function Favorites() {
  return (
    <Conteiner>
      <Section>
        <Wrap>
          <Img
            src="https://auto-time.com.ua/wp-content/uploads/2021/09/1.svg "
            alt="Img"
          />
          <TextForIcon>Надійні та комфортні автомобілі</TextForIcon>
        </Wrap>
        <Wrap>
          <Img
            src="https://auto-time.com.ua/wp-content/uploads/2021/09/2.svg  "
            alt="Img"
          />
          <TextForIcon>Ми завжди на зв'язку, 24/7</TextForIcon>
        </Wrap>
        <Wrap>
          <Img
            src="https://auto-time.com.ua/wp-content/uploads/2021/09/3.svg  "
            alt="Img"
          />
          <TextForIcon>Адресна доставка автомобіля</TextForIcon>
        </Wrap>
      </Section>
      <Section>
        <img
          src="https://auto-time.com.ua/wp-content/uploads/2021/04/ride.png"
          alt=""
          width="800px"
        />
        <div>
          <Title>Прокат авто – це надійно, комфортно та вигідно!</Title>
          <Text>
            Орендуй для ділової зустрічі, на час відпочинку, у разі ремонту
            свого авто та просто для комфортного пересування у будь-який момент.
          </Text>
          <Text>
            Автомобіль можна обрати та забронювати на потрібний період онлайн, у
            будь-який зручний час від кількох годин до кількох місяців.
          </Text>
        </div>
      </Section>
    </Conteiner>
  );
}
