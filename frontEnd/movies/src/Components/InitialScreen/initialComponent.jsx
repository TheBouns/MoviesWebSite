import "./initialComponent.css";

export const InitialComponent = () => {
  return (
    <div id="initial-container">
      {/* <img
        alt="weblogo"
        src="https://res.cloudinary.com/ducxt7zb3/image/upload/v1651054052/logoWeb_urdlns.png"
      /> */}
      <form className="login-form">
        <h2>Sig in to M4Y</h2>
        <input type="text" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <input type="submit" value="Enter" />
      </form>
    </div>
  );
};
