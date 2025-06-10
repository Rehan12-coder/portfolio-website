// script.js
document.addEventListener('DOMContentLoaded', function() {
    // Get the buttons
    const downloadResumeBtn = document.querySelector('.btn:first-child');
    const visitGithubBtn = document.querySelector('.btn:last-child');
    
    // Resume download button click handler
    downloadResumeBtn.addEventListener('click', function() {
        // Replace 'resume.pdf' with the actual path to your resume file
        const resumeUrl = 'resume.pdf';
        
        // Create a temporary anchor element to trigger download
        const link = document.createElement('a');
        link.href = resumeUrl;
        link.download = 'Rehan_Resume.pdf'; // This will be the filename when downloaded
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    });
    
    // GitHub button click handler
    visitGithubBtn.addEventListener('click', function() {
        // Replace with your actual GitHub profile URL
        window.open('https://github.com/Rehan12-coder', '_blank');
    });
    
    // You can add similar handlers for other buttons if needed
});