import React from "react";
import './projects.scss';
import ProjectCard from "./ProjectCard";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Helmet } from 'react-helmet';

export default function Projects() {
    const projects = [
        {
            id: 1,
            title: 'Web',
            shortDescription:'Automatisierung: Die Automatisierung von Geschäftsprozessen, insbesondere der Bestellabwicklung steigert senkt die Kosten.',
            description:'Automatisierung: Die Automatisierung von Geschäftsprozessen, insbesondere der Bestellabwicklung steigert senkt die Kosten Ihres Unternehmens, steigert die Geschwindigkeit Ihrer Abläufe massiv und erhöht Ihre Margen sofort.',
            img:'https://themes.artbees.net/wp-content/uploads/2019/10/Deliver-Website-Projects-Faster-1-e1571748364439.png',
            technologies: ['React', 'Firebase', 'Redux', 'Python'],
        },
        {
            id: 2,
            title: 'Apple',
            shortDescription:'Massiv weniger niedrig Fähigkeit Arbeiter benötigt. Dies löst Personalprobleme, spart langfristig massiv Geld und erlaubt Ihrem Unternehmen, rundum die Uhr Geld zu verdienen (via Online-Portal).',
            description:'Massiv weniger niedrig Fähigkeit Arbeiter benötigt. Dies löst Personalprobleme, spart langfristig massiv Geld und erlaubt Ihrem Unternehmen, rundum die Uhr Geld zu verdienen (via Online-Portal).Massiv weniger niedrig Fähigkeit Arbeiter benötigt. Dies löst Personalprobleme, spart langfristig massiv Geld und erlaubt Ihrem Unternehmen, rundum die Uhr Geld zu verdienen (via Online-Portal).',
            img:'https://media.geeksforgeeks.org/wp-content/cdn-uploads/20220428235932/6-Best-iOS-Project-Ideas-For-Beginners.jpg',
            technologies: ['Swift', 'Firebase', 'UIKit', 'SwiftyStoreKit'],
        },
        {
            id: 3,
            title: 'Android',
            shortDescription:'Die Geschwindigkeit und Effizienz der Kommunikation im Unternehmen und mit den Kunden wird auf ein neues Level gehoben. Mittelsmänner werden wegrationalisiert und die Kommunikation.',
            description:'Die Geschwindigkeit und Effizienz der Kommunikation im Unternehmen und mit den Kunden wird auf ein neues Level gehoben. Mittelsmänner werden wegrationalisiert und die Kommunikation findet per Direktnachrichten aufs Handy statt. Dies macht die Arbeitsstunden der Mitarbeiter weit effektiver und spart dadurch wieder Geld, was den Profit erhöht.',
            img:'https://www.interviewbit.com/blog/wp-content/uploads/2022/01/Android-Projects-2048x1000.png',
            technologies: ['Java', 'Firebase', 'UIKit', 'SDK'],
        },
        {
            id: 4,
            title: 'Database',
            shortDescription:'Digitalisierung: Wir digitalisieren Ihr Unternehmen in allen Aspekten. Die richtige Hardware, Software und Mitarbeiter-Schulung sind dabei essentiell.',
            description:'Digitalisierung: Wir digitalisieren Ihr Unternehmen in allen Aspekten. Die richtige Hardware, Software und Mitarbeiter-Schulung sind dabei essentiell.Digitalisierung: Wir digitalisieren Ihr Unternehmen in allen Aspekten. Die richtige Hardware, Software und Mitarbeiter-Schulung sind dabei essentiell.',
            img:'https://www.interviewbit.com/blog/wp-content/uploads/2022/01/SQL-Projects-2048x1000.png',
            technologies: ['SQL', 'Firebase', 'UIKit', 'SwiftyStoreKit'],
        },
        {
            id: 5,
            title: 'CRM',
            shortDescription:'Stellt die Anpassungsfähigkeit Ihres Unternehmens sicher. Unternehmen, welche die Digitalisierung umarmen und fördern.',
            description:'Stellt die Anpassungsfähigkeit Ihres Unternehmens sicher. Unternehmen, welche die Digitalisierung umarmen und fördern, schaffen sich gigantische Wettbewerbsvorteile gegenüber der schlafenden Konkurrenz. Insbesondere in Sachen Geschwindigkeit, Margen, Kundenzufriedenheit und Flexibilitöt.',
            img:'https://gocrm.io/wp-content/uploads/2020/08/crm-projects-fail.png',
            technologies: ['Swift', 'Firebase', 'UIKit', 'SwiftyStoreKit'],
        },
        {
            id: 6,
            title: 'Quotely',
            shortDescription:'Buchhaltung 3.0: Live BWA und Einsicht in gesamtes Unternehmen vom Handy aus, jederzeit.',
            description:'Buchhaltung 3.0: Live BWA und Einsicht in gesamtes Unternehmen vom Handy aus, jederzeit.Buchhaltung 3.0: Live BWA und Einsicht in gesamtes Unternehmen vom Handy aus, jederzeit.',
            img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRUR4YqSrPcV0h72BFtj3g5T7GJ-Siop4k7Q&usqp=CAU',
            technologies: ['Swift', 'Firebase', 'UIKit', 'SwiftyStoreKit'],
        },

    ]
    return(
        <section id="branches" >
             <Helmet>
                <title>ICAP Group GmbH</title>
            </Helmet>
            <div className="banner">
                <div className="title">
                    <h1>ICAP Group GmbH</h1>
                    <h3>Wir bringen Unternehmen
                        ins digitale Zeitalter!</h3>
                    <li>IOS & Android App-Entwicklung</li>
                    <li>Info-Webseiten</li>
                    <li>Web-Solutions</li>
                    <li>Datenbanken & Cloud Erstellung/Management</li>
                    <li>Einrichtung von Workstations</li>
                    <li>Datenschutz & Compliance</li>
                </div>
            </div>
            <div className="projects">
                <div className="cards">
                    {projects.map(project => (
                        <ProjectCard project={project} key={project.id}/>
                    ))}
                </div> 
            </div>
        </section>
    );
}