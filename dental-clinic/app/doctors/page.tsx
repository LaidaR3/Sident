import DoctorsHero from "@/components/doctors/DoctorHero";
import DoctorsProfiles from "@/components/doctors/DoctorProfile";
import Specializations from "@/components/doctors/Specialization";
export default function Doctor(){
    return(
        <main>
            <DoctorsHero />
            <DoctorsProfiles />
            <Specializations />
        </main>
    )
}