import MainApp from "@/components/mainApp";
import PrimaryLayout from "@/components/primaryLayout";
import VehiclesLayout from "@/components/vehicles/vehiclesLayout";

export default function Home() {
    return (
        <PrimaryLayout>
            <MainApp title="Veiculos">
                <VehiclesLayout></VehiclesLayout>
            </MainApp>
        </PrimaryLayout>
    )
}