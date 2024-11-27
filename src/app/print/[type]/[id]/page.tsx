"use client"

import React from "react";
import { Inter } from "next/font/google";
import { useArticles } from "@/services/api/useQueries/useArticles";
import { useAnnouncements } from "@/services/api/useQueries/useAnnouncements";
import { useEvents } from "@/services/api/useQueries/useEvents";
import { useNews } from "@/services/api/useQueries/useNews";
import PrintTemplate from "@/components/ui/print-template";

const inter = Inter({
    subsets: ["latin"],
    display: "swap",
})

export default function Page({params}: {params: { type: string, id: string }}) {
    const { type, id } = params;
    const { newsDetails } = useNews(id);
    const { articleDetails } = useArticles(id);
    const { eventDetails } = useEvents(id);
    const { announcementDetails } = useAnnouncements(id);
    let contentData;

    switch (type) {
        case 'news' :
            contentData = newsDetails;
            break;
        case 'announcement' :
            contentData = announcementDetails;
            break;
        case 'event' :
            contentData = eventDetails;
            break;
        case 'article' :
            contentData = articleDetails;
            break;
        default : 
            contentData = null;
            break;
    }

    return (
        <div className={`text-center ${inter.className}`}>
            {contentData ? (
                <PrintTemplate details={contentData} type={type}/>
                ) : (
                <div>Data Tidak Ditemukan</div>
            )}
        </div>
    )
}