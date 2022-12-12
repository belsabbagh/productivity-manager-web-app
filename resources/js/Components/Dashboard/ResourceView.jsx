import React from 'react';
import '../../../css/app.css'
import ContentView from "@/Components/ContentView";

export default function ResourceView({children, resource}) {
    return (
        <ContentView title={resource}>
            {children}
        </ContentView>
    );
}
