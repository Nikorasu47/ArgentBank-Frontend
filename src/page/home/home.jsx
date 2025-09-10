import "./home.css";
import Feature from "../../composant/feature/feature";
import iconChat from "../../assets/img/icon-chat.png";
import iconMoney from "../../assets/img/icon-money.png";
import iconSecurity from "../../assets/img/icon-security.png";
import heroBg from "../../assets/img/bank-tree.jpeg";

function Home() {
  return (
    <main className="main">
      <section
        className="hero"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div>
          <h2 className="sr-only">Promoted Content</h2>
          <p className="subtitle">No fees.</p>
          <p className="subtitle">No minimum deposit.</p>
          <p className="subtitle">High interest rates.</p>
          <p className="text">Open a savings account with Argent Bank today!</p>
        </div>
      </section>
      <section className="features">
        <Feature
          icon={iconChat}
          title="You are our #1 priority"
          text="Need to talk to a representative? You can contact us 24/7."
        />
        <Feature
          icon={iconMoney}
          title="More savings means higher rates"
          text="The more you save with us, the higher your interest rate will be!"
        />
        <Feature
          icon={iconSecurity}
          title="Security you can trust"
          text="We use top of the line encryption to keep your information safe."
        />
      </section>
    </main>
  );
}

export default Home;
