import Image from "next/image";
import React from "react";

const ProfileHistory = () => {
  return (
    <div className="w-full lg:pt-24 px-3 rounded-[10px] text-blue-base">
      <div className="relative  bg-white flex flex-col items-center  pt-10 pb-20">
        <div className="flex flex-col lg:items-center gap-4 w-[80%]  lg:w-2/3 lg:text-center">
          <h1 className="font-[700] lg:text-[46px] text-[24px] ">
            Sejarah Berdirinya Sekolah
          </h1>
          <p className="font-[500] text-[18px] text-gray">
            Sedikit pengetahuan mengenai bagaimana sejarah berdirinya SMK Negeri
            1 Purwosari
          </p>
          <hr className="w-full border mt-8" />
        </div>
        <div className="flex flex-col items-center gap-10 lg:gap-20  w-[80%]">
          <Image
            src={"/assets/profile/welcome-speech/profile-welcome-speech.png"}
            alt=""
            className="w-full rounded-[10px]"
            width={800}
            height={800}
          />
          <p className="flex flex-col items-start text-justify gap-10 font-[500] text-[18px] text-blue-base">
            <span>
              Assalamualaikum warahmatullahi wabarakatuh. Dengan mengucapkan
              segala puji kepada Tuhan Yang Maha Esa, disertai rasa syukur atas
              rahmat dan karunia-Nya. Perkembangan era revolusi industri 4.0
              (era digital) dan pesatnya kemajuan teknologi dan informasi saat
              ini, membuat keberadaan sebuah website untuk dunia pendidikan,
              khususnya sekolah, menjadi sangat penting. Website sangat penting
              dalam upaya mengedepankan prinsip transparansi informasi dan
              perkembangan terkini sekolah.
            </span>
            <span>
              Masyarakat dapat dengan mudah mengakses berbagai informasi yang
              harus diketahui oleh setiap shareholder dan stakeholder secara
              nyata. Website dapat menjadi ajang promosi sekolah yang cukup
              efektif. Berbagai kegiatan dan progres sekolah dapat disampaikan
              secara faktual dan aktual sehingga masyarakat dapat mengetahui
              prestasi-prestasi yang telah berhasil diraih oleh SMK Negeri 1
              Purwosari. Sebagai media pembelajaran, website sekolah juga dapat
              dimanfaatkan untuk memuat artikel dan informasi kegiatan yang
              diadakan di SMK Negeri 1 Purwosari. Berbagai artikel tentang
              pembelajaran dan kejuruan yang terkait dengan kegiatan
              pembelajaran di kelas dapat dipublikasikan melalui website.
              Website ini dapat menunjang sarana kegiatan pembelajaran berbasis
              Teknologi dan Informasi.{" "}
            </span>
            <span>
              Selain itu, website ini juga menampilkan sejarah berdirinya
              sekolah SMK Negeri 1 Purwosari yang bertujuan agar khalayak umum
              dapat mengetahuinya. Kehadiran website juga dijadikan sebagai
              media koordinasi dengan unsur komite sekolah. Kerjasama dan
              komunikasi intensif sekolah dengan unsur komite sangat menentukan
              kesuksesan sekolah dalam mewujudkan pendidikan yang maju untuk
              menuju Generasi Emas.
            </span>
            <span>
              Cukup sekian mengenai pembukaan website baru yang telah kami buat.
              Terima kasih atas kerjasama semua pihak yang terlibat dalam
              pengembangan website ini. Dengan prinsip transparan, faktual, dan
              aktual, pendidikan di SMK Negeri 1 Purwosari akan jauh lebih maju.
              Harapan kita semua adalah sekolah semakin berkualitas dan sukses
              dalam mencerdaskan kehidupan anak bangsa Indonesia menuju Generasi
              Emas. Amin. Wassalamu’alaikum warahmatullahi wabarakatuh.
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProfileHistory;
