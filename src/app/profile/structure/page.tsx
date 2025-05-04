"use client";

import React from "react";
import ProfileLayout from "@/layouts/profile-layout";
import PDFViewer from "@/components/ui/pdf-viewer";
import { useSchool } from "@/services/api/useQueries/useSchool";

const ProfileStructure = () => {
  const { schoolStructure } = useSchool();

  return (
    <ProfileLayout
      title="Struktur Organisasi Sekolah"
      subtitle="Struktur Organisasi Sekolah SMK Negeri 1 Purwosari"
      classNameWrapper="pt-[70px]"
    >
      <PDFViewer
        className="mt-10"
        url={
          (schoolStructure &&
            schoolStructure?.[0] &&
            schoolStructure?.[0]?.profile_data) ||
          ""
        }
      />
    </ProfileLayout>
  );
};

export default ProfileStructure;
