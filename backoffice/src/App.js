import "./App.css";
import { collection } from "firebase/firestore";
import { useFirestore, useFirestoreCollectionData } from "reactfire";
import CustomAppBar from "./components/CustomAppBar";
import CreateDigitalIdentityForm from "./components/CreateDigitalIdentityForm";

function App() {
  const peopleRef = collection(useFirestore(), "people");

  const { status, data } = useFirestoreCollectionData(peopleRef);

  console.log({ status, data });

  return (
    <div className="App">
      <CustomAppBar />
      <div className="App-body">
        <CreateDigitalIdentityForm />
      </div>
    </div>
  );
}

export default App;
