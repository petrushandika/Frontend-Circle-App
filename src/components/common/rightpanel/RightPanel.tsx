import RightPanelItem from "./RightPanelItem";

export default function RightPanel() {
  const refetch = () => {
    console.log("Fetching data...");
  };

  return (
    <RightPanelItem refetch={refetch} />
  );
}
