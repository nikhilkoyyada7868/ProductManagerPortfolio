from pathlib import Path
import shutil

from reportlab.lib import colors
from reportlab.lib.enums import TA_CENTER
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.lib.units import inch
from reportlab.platypus import HRFlowable, Paragraph, SimpleDocTemplate, Spacer, Table, TableStyle


ROOT = Path(__file__).resolve().parents[1]
OUTPUT = ROOT / "output/pdf/nikhil-koyyada-product-manager-public.pdf"
PUBLIC = ROOT / "public/assets/nikhil-koyyada-resume.pdf"


def build_styles():
    styles = getSampleStyleSheet()
    styles.add(
        ParagraphStyle(
            name="ResumeName",
            parent=styles["Title"],
            fontName="Helvetica-Bold",
            fontSize=18,
            leading=22,
            alignment=TA_CENTER,
            spaceAfter=2,
            textColor=colors.black,
        )
    )
    styles.add(
        ParagraphStyle(
            name="ResumeTagline",
            parent=styles["Normal"],
            fontName="Helvetica",
            fontSize=8.8,
            leading=11,
            alignment=TA_CENTER,
            textColor=colors.HexColor("#222222"),
            spaceAfter=5,
        )
    )
    styles.add(
        ParagraphStyle(
            name="ResumeSection",
            parent=styles["Heading2"],
            fontName="Helvetica-Bold",
            fontSize=9.5,
            leading=11,
            textColor=colors.black,
            spaceBefore=5,
            spaceAfter=3,
        )
    )
    styles.add(
        ParagraphStyle(
            name="ResumeRole",
            parent=styles["Normal"],
            fontName="Helvetica-Bold",
            fontSize=8.8,
            leading=10.5,
            textColor=colors.black,
            spaceBefore=2,
            spaceAfter=1,
        )
    )
    styles.add(
        ParagraphStyle(
            name="ResumeBody",
            parent=styles["Normal"],
            fontName="Helvetica",
            fontSize=7.45,
            leading=9.1,
            textColor=colors.HexColor("#222222"),
            spaceAfter=1.5,
        )
    )
    styles.add(
        ParagraphStyle(
            name="ResumeBullet",
            parent=styles["ResumeBody"],
            leftIndent=9,
            firstLineIndent=-6,
            bulletIndent=0,
            spaceAfter=1.2,
        )
    )
    return styles


def main():
    styles = build_styles()
    story = []

    def section(title):
        story.append(Spacer(1, 2))
        story.append(Paragraph(title, styles["ResumeSection"]))
        story.append(
            HRFlowable(
                width="100%",
                thickness=0.5,
                color=colors.HexColor("#999999"),
                spaceBefore=0,
                spaceAfter=3,
            )
        )

    def role(left, right=""):
        if right:
            table = Table(
                [[Paragraph(left, styles["ResumeRole"]), Paragraph(right, styles["ResumeRole"])]],
                colWidths=[4.65 * inch, 1.65 * inch],
            )
            table.setStyle(
                TableStyle(
                    [
                        ("VALIGN", (0, 0), (-1, -1), "TOP"),
                        ("ALIGN", (1, 0), (1, 0), "RIGHT"),
                        ("LEFTPADDING", (0, 0), (-1, -1), 0),
                        ("RIGHTPADDING", (0, 0), (-1, -1), 0),
                        ("TOPPADDING", (0, 0), (-1, -1), 0),
                        ("BOTTOMPADDING", (0, 0), (-1, -1), 0),
                    ]
                )
            )
            story.append(table)
        else:
            story.append(Paragraph(left, styles["ResumeRole"]))

    def bullet(text):
        story.append(Paragraph(f"* {text}", styles["ResumeBullet"]))

    story.append(Paragraph("Nikhil Koyyada", styles["ResumeName"]))
    story.append(
        Paragraph(
            "Product Manager | AI Product Manager | Technical Product Manager",
            styles["ResumeTagline"],
        )
    )
    story.append(
        Paragraph(
            "+91 9885487868 | nikhil.kinvests@gmail.com | linkedin.com/in/nikhilkoyyada | github.com/nikhilkoyyada7868 | product-manager-portfolio-lovat.vercel.app",
            styles["ResumeTagline"],
        )
    )

    section("Summary")
    story.append(
        Paragraph(
            "Product Manager with an engineering foundation, MBA from IIM Bangalore, and hands-on experience across AI-enabled workflows, customer-facing platforms, data systems, security products, and 0-to-1 prototypes. Comfortable moving between customer discovery, PRDs, prioritization, evaluation metrics, stakeholder alignment, and technical execution.",
            styles["ResumeBody"],
        )
    )

    section("Work Experience")
    role("Amazon | Product Manager", "Jun 2026 - Present")
    bullet(
        "Working on AI-enabled internal products with a focus on discovery, requirements, prioritization, evaluation quality, stakeholder alignment, and measurable operational leverage."
    )
    bullet(
        "Define product requirements, success metrics, feedback loops, and adoption paths for technical workflows used by cross-functional business and engineering stakeholders."
    )
    bullet(
        "Partner with engineering and business teams to translate ambiguous operational needs into scalable product decisions while maintaining responsible AI guardrails and delivery discipline."
    )

    role("Amazon | AFBP MBA Intern | Pre-Placement Offer", "Apr 2025 - May 2025")
    bullet(
        "Reframed a customer-backed operations problem using field research, process maps, stakeholder feedback, and operational data."
    )
    bullet(
        "Converted findings into product requirements for earlier detection, prevention, and improved routing decisions, with a focus on reusable process improvements."
    )

    role("Lookout India Technologies | Software Engineer", "Sep 2020 - May 2024")
    bullet(
        "Partnered with Product Managers to identify 15+ product improvements and deliver 35+ customer-facing features and 15K+ lines of code, increasing adoption by 10% and performance by 25%."
    )
    bullet(
        "Designed an encryption framework for 100M+ PII records, enabling privacy controls adopted by 8+ enterprise clients."
    )
    bullet(
        "Led Vertica migration and redesigned the SIEM framework across 14+ activity types, improving process efficiency by 70%, cutting query time by 80%, and reducing latency by 55%."
    )
    bullet(
        "$100K+ enterprise client onboarding through PAN proxy capabilities and resolved 30+ critical production issues, protecting continuity for 25+ customers."
    )
    bullet(
        "Developed dynamic risk scoring across 35K+ cloud environments, improving privacy, compliance, and security visibility by 60%."
    )
    bullet(
        "Coordinated release execution across 3 teams and 50+ members, automated product testing to save 150+ hours, and authored 25+ SOPs that cut resolution time by 25%."
    )

    section("Public Projects")
    bullet(
        "Vyapaar Mitra - Designed a fintech concept to help MSMEs access working capital using alternate data signals and simplified credit assessment."
    )
    bullet(
        "AI Customer Support Chatbot - Prototyped a customizable AI chatbot to help SMBs answer customer queries with low-cost support automation."
    )
    bullet(
        "AI Voice Support Agent - Built a real-time Gemini Live prototype with prompt-led intents, Web Audio, and human escalation."
    )
    bullet(
        "AI-Assisted Review Platform - Defined and built a QR-led restaurant review assistant that turns ratings and selected topics into editable, privacy-safe review drafts."
    )
    bullet(
        "WhatsApp Mood Tracker - Built a low-friction behavior tracking flow to help users log moods and identify emotional patterns."
    )

    section("Skills")
    story.append(
        Paragraph(
            "<b>Product:</b> Product strategy, discovery, customer research, roadmaps, PRDs, prioritization, MVPs, GTM, experimentation, KPIs, product marketing, feature delivery.",
            styles["ResumeBody"],
        )
    )
    story.append(
        Paragraph(
            "<b>AI and Data:</b> Generative AI, LLM products, agentic workflows, prompt engineering, human-in-the-loop design, model evaluation, guardrails, Excel, SQL.",
            styles["ResumeBody"],
        )
    )
    story.append(
        Paragraph(
            "<b>Design and Stakeholders:</b> UI/UX prototyping, Figma, Balsamiq, stakeholder management, client management, process improvement, Six Sigma, Agile, SDLC.",
            styles["ResumeBody"],
        )
    )
    story.append(
        Paragraph(
            "<b>Technical:</b> Java, TypeScript, React, REST APIs, shell scripting, Redis, Spring Boot, Docker, AWS microservices, Kafka, JUnit, Git, Splunk.",
            styles["ResumeBody"],
        )
    )

    section("Education")
    role("Indian Institute of Management Bangalore | MBA", "2024 - 2026")
    role("National Institute of Technology Warangal | Bachelor of Technology", "2016 - 2020")

    section("Awards and Achievements")
    bullet(
        "Okta Product Management Case Competition: Won a Pre-Placement Interview after reaching the final round with a product solution."
    )
    bullet("Amazon Pre-Placement Offer: Received a full-time offer based on internship performance and impact.")
    bullet(
        "Lookout Innovation Winner: Won the intra-company hackathon; the proposed solution was implemented as a product feature."
    )
    bullet(
        "Kotak National Finalist: Ranked 1st among 700+ teams and led strategy for an INR 140 crore wealth-management case."
    )
    bullet(
        "Employee Excellence: Named Employee of the Quarter in a 500+ employee cohort for project delivery and data accessibility improvements."
    )

    section("Positions of Responsibility")
    bullet(
        "Tech Head, Summer Placement Facilitation: Led coordination and execution for the junior-batch placement process, ensuring structured delivery and stakeholder alignment."
    )
    bullet(
        "Senior Coordinator, Entrepreneurship and Innovation Cell: Partnered with the campus incubator to deliver entrepreneurship initiatives and institute-wide innovation activities."
    )

    OUTPUT.parent.mkdir(parents=True, exist_ok=True)
    PUBLIC.parent.mkdir(parents=True, exist_ok=True)
    doc = SimpleDocTemplate(
        str(OUTPUT),
        pagesize=A4,
        rightMargin=0.45 * inch,
        leftMargin=0.45 * inch,
        topMargin=0.35 * inch,
        bottomMargin=0.35 * inch,
    )
    doc.build(story)
    shutil.copy2(OUTPUT, PUBLIC)


if __name__ == "__main__":
    main()
