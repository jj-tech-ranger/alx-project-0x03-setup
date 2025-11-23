import Button from "../common/Button";

const Header: React.FC = () => {
  return (
    <>
      <header className="flex justify-between items-center py-4 px-6 bg-blue-500 fixed top-0 left-0 right-0 z-10 shadow-md">
        <div className="text-white font-bold text-xl">Shopify</div>
        <div className="flex space-x-2">
          <Button
            buttonLabel="Sign In"
            buttonSize="medium"
            buttonBackgroundColor="blue"
            action={() => console.log("Sign In clicked")}
          />
          <Button
            buttonLabel="Sign Up"
            buttonSize="medium"
            buttonBackgroundColor="orange"
            action={() => console.log("Sign Up clicked")}
          />
        </div>
      </header>
    </>
  );
};

export default Header;
