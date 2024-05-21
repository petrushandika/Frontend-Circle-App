import { Card } from "../components/Card";

function Home() {
  const data = {
    profile:
      "https://media.licdn.com/dms/image/D5603AQHv6LsdiUg1kw/profile-displayphoto-shrink_200_200/0/1695167344576?e=2147483647&v=beta&t=XAUf_Aqfa5tAmMqvOXPJ26wXV73tOHvI-rygpb_WpQA",
    name: "Bill Gates",
    username: "billgates",
    time: "• 4h",
    content:
      "Pernah nggak dapet dream job lama-lama ngerasa lah kok tidak seperti yang diharapkan (atau simply lelah) terus fall out of love dengan job/bidang tsb",
    like: 1470,
    reply: 350,
  };

  return (
    <div>
      <Card
        profile={data.profile}
        name={data.name}
        username={data.username}
        time={data.time}
        content={data.content}
        like={data.like}
        reply={data.reply}
      />
      <Card
        profile={data.profile}
        name={data.name}
        username={data.username}
        time={data.time}
        content={data.content}
        like={data.like}
        reply={data.reply}
      />
      <Card
        profile={data.profile}
        name={data.name}
        username={data.username}
        time={data.time}
        content={data.content}
        like={data.like}
        reply={data.reply}
      />
      <Card
        profile={data.profile}
        name={data.name}
        username={data.username}
        time={data.time}
        content={data.content}
        like={data.like}
        reply={data.reply}
      />
    </div>
  );
}

export default Home;
