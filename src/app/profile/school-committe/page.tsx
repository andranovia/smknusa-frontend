import React from "react";
import ProfileLayout from "@/layouts/profile-layout";
import PDFViewer from "@/components/ui/pdf-viewer";

export const metadata = {
  title: "School Committee",
  description: "SMKN 1 Purwosari School Committee",
};

const ProfileSchoolCommittee = () => {
  return (
    <ProfileLayout
      title="Struktur Organisasi Sekolah"
      subtitle="Struktur Organisasi Sekolah SMK Negeri 1 Purwosari"
      classNameWrapper="pt-[76px]"
    >
      <PDFViewer url="https://www.smkn1purwosari.sch.id/public/img/struktur_smk.pdf#toolbar=1&navpanes=0&scrollbar=0" />
    </ProfileLayout>
  );
};

export default ProfileSchoolCommittee;
