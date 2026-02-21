import React from 'react';
import CareersHero from '@/components/careers/CareersHero';
import OpeningsSection from '@/components/careers/OpeningsSection';

export default function CareersPage() {
    return (
        <main className="min-h-screen bg-white">
            <CareersHero />
            <OpeningsSection />
        </main>
    );
}
