
// Update the home page to highlight the sidebar and navigation

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">
          Welcome to Your POS Dashboard
        </h1>
        <p className="text-xl text-gray-600 mb-4">
          Use the sidebar to navigate the different modules (Products, Orders, Customers, Payments, Reports, Users, and Settings).
        </p>
      </div>
    </div>
  );
};

export default Index;
