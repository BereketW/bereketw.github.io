import React from 'react';
import CareersHero from '@/components/careers/CareersHero';
import OpeningsSection from '@/components/careers/OpeningsSection';
import { getCareers } from '@/lib/tigat-api';

export default async function CareersPage() {
    const careers = await getCareers();
    const openings = careers.map((career) => {
        const category = career.category?.toLowerCase() || "";
        const icon = career.icon
            || (category.includes("design") ? "Pipette"
                : category.includes("engineering") || category.includes("development") ? "Code2"
                : category.includes("project") ? "LayoutGrid"
                : "Briefcase");

        return {
            title: career.title,
            description: career.description,
            location: career.location || "Remote",
            icon,
        };
    });

    return (
        <main className="min-h-screen bg-white">
            <CareersHero />
            <OpeningsSection openings={openings} />
        </main>
    );
}
