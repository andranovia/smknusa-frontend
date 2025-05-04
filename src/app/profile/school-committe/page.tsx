"use client";

import React from "react";
import ProfileLayout from "@/layouts/profile-layout";
import PDFViewer from "@/components/ui/pdf-viewer";
import { useSchool } from "@/services/api/useQueries/useSchool";

const ProfileSchoolCommittee = () => {
  const { schoolCommittee } = useSchool();

  return (
    <ProfileLayout
      title="Komite Sekolah"
      subtitle="Memberitahu informasi mengenai komite sekolah"
      classNameWrapper="pt-[70px]"
    >
      <PDFViewer
        className="mt-10"
        url={
          (schoolCommittee &&
            schoolCommittee?.[0] &&
            schoolCommittee?.[0]?.profile_data) ||
          ""
        }
      />
    </ProfileLayout>
  );
};

export default ProfileSchoolCommittee;
