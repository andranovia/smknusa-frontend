"use client"

import React, { useEffect, useState } from "react";
import { Inter } from "next/font/google";
import { Article, useArticles } from "@/services/api/useQueries/useArticles";
import { Announcement, useAnnouncements } from "@/services/api/useQueries/useAnnouncements";
import { Event, useEvents } from "@/services/api/useQueries/useEvents";
import { News, useNews } from "@/services/api/useQueries/useNews";
import PrintTemplate from "@/components/ui/print-template";

const inter = Inter({
    subsets: ["latin"],
    display: "swap",
})



export default function Page({params}: {params: { type: string, id: string }}) {
    const { type, id } = params;

    const [loading, setLoading] = useState(true);
    const [contentData, setContentData] = useState<Event | News | Article | Announcement | null>(null);

    const { newsDetails } = useNews(id);
    const { articleDetails } = useArticles(id);
    const { eventDetails } = useEvents(id);
    const { announcementDetails } = useAnnouncements(id);

    useEffect(() => {
        switch (type) {
            case 'news' :
                if (newsDetails) setContentData(newsDetails);
                console.log({'news': contentData, type });
                break;
            case 'announcements' :
                if(announcementDetails) setContentData(announcementDetails);
                console.log({'announcement': contentData, type });
                break;
            case 'events' :
                if(eventDetails) setContentData(eventDetails);
                console.log({'events': contentData, type });
                break;
            case 'article' :
                if(articleDetails) setContentData(articleDetails);
                console.log({'article': contentData, type });
                break;
            default : 
                setContentData(null);
                break;
        }
        setLoading(false);
    }, [type, newsDetails, articleDetails, eventDetails, announcementDetails, contentData]);

    useEffect(() => {
        if (!loading && contentData && typeof window !== "undefined") {
            const returnUrl = sessionStorage.getItem("returnUrl");

            if(returnUrl) {
                setTimeout(() => {
                    window.print();
                    window.onafterprint = () => {
                        sessionStorage.removeItem("returnUrl");
                        window.location.href = returnUrl;
                    };
                }, 3000);
            }
        }
    }, [loading, contentData])

    if (loading) {
        return <div>Loading...</div>
    }

    return (
        <div className={`text-center print-container ${inter.className}`}>
            {contentData ? (
                <PrintTemplate details={contentData} type={type}/>
                ) : (
                <div>Data Tidak Ditemukan</div>
            )}
        </div>
    )
}