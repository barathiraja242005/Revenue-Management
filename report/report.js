document.getElementById('download').addEventListener('click', () => {
    const report = document.getElementById('report');
    const opt = {
        margin: 0.5,
        filename: 'Indore_Areas_Municipal_Revenue_Report_2017_18.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
    };
    html2pdf().from(report).set(opt).save();
});
