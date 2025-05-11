import { useQuery } from "@tanstack/react-query";
import {
  getCourseWork,
  getPrincipalSpeech,
  getSchoolCommittee,
  getSchoolStructure,
  getVisiMission,
} from "../methods/fetch-school";

export interface SchoolProfile {
  id_profile: number;
  profile_name: string;
  name_data: string;
  type_data: string;
  profile_image: string;
  profile_data: string;
  icon_type: string;
}

export const useSchool = () => {
  const { data: schoolCommittee, isLoading: isSchoolCommitteeLoading } =
    useQuery<SchoolProfile[] | null>({
      queryKey: ["SchoolCommittee"],
      queryFn: async () => {
        const data = await getSchoolCommittee();
        return data ?? [];
      },
    });

  const { data: schoolStructure, isLoading: isSchoolStructureLoading } =
    useQuery<SchoolProfile[] | null>({
      queryKey: ["SchoolStructure"],
      queryFn: async () => {
        const data = await getSchoolStructure();
        return data ?? [];
      },
    });

  const { data: courseWork, isLoading: isCourseWorkLoading } =
    useQuery<SchoolProfile[] | null>({
      queryKey: ["CourseWork"],
      queryFn: async () => {
        const data = await getCourseWork();
        return data ?? [];
      },
    });

  const { data: visiMission, isLoading: isVisiMissionLoading } =
    useQuery<SchoolProfile[] | null>({
      queryKey: ["VisiMission"],
      queryFn: async () => {
        const data = await getVisiMission();
        return data ?? [];
      },
    });

  const { data: principalSpeech, isLoading: isPrincipalSpeechLoading } =
    useQuery<SchoolProfile[] | null>({
      queryKey: ["PrincipalSpeech"],
      queryFn: async () => {
        const data = await getPrincipalSpeech();
        return data ?? [];
      },
    });

  if (schoolCommittee == undefined) {
    console.log("get data returned undefined");
  } else {
    console.log("get data", schoolCommittee);
  }

  return {
    schoolStructure,
    isSchoolStructureLoading,
    schoolCommittee,
    isSchoolCommitteeLoading,
    courseWork,
    isCourseWorkLoading,
    visiMission,
    isVisiMissionLoading,
    principalSpeech,
    isPrincipalSpeechLoading,
  };
};
