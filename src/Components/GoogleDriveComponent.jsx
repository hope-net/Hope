import React, { useEffect, useState } from 'react';

const GoogleDriveComponent = () => {
  const [folders, setFolders] = useState([]);
  const [loading, setLoading] = useState(false);

  // Initialize Google API client
  const handleClientLoad = () => {
    window.gapi.load('client:auth2', initClient);
  };

  // Initialize the client with credentials
  const initClient = () => {
    window.gapi.client.init({
      apiKey: 'YOUR_API_KEY',
      clientId: 'YOUR_CLIENT_ID',
      scope: 'https://www.googleapis.com/auth/drive',
      discoveryDocs: ['https://www.googleapis.com/discovery/v1/apis/drive/v3/rest'],
    }).then(() => {
      if (window.gapi.auth2.getAuthInstance().isSignedIn.get()) {
        listFolders('1P8JK6K5wcaN2soaCf3GZ_EuYN1i3IL03'); // Root Folder ID
      } else {
        window.gapi.auth2.getAuthInstance().signIn().then(() => {
          listFolders('1P8JK6K5wcaN2soaCf3GZ_EuYN1i3IL03');
        });
      }
    });
  };

  // Fetch folders from Google Drive
  const listFolders = (folderId) => {
    setLoading(true);
    window.gapi.client.drive.files.list({
      q: `'${folderId}' in parents and mimeType='application/vnd.google-apps.folder'`,
      fields: 'files(id, name)',
    }).then((response) => {
      setFolders(response.result.files || []);
      setLoading(false);
    });
  };

  // Function to navigate to the selected folder
  const navigateToFolder = (folderId) => {
    window.location.href = `https://drive.google.com/drive/folders/${folderId}`;
  };

  useEffect(() => {
    handleClientLoad();
  }, []);

  return (
    <div>
      <h2>Google Drive Folder Navigation</h2>
      {loading && <p>Loading folders...</p>}
      {!loading && folders.length > 0 && (
        <select onChange={(e) => navigateToFolder(e.target.value)}>
          <option value="">Select a folder</option>
          {folders.map((folder) => (
            <option key={folder.id} value={folder.id}>
              {folder.name}
            </option>
          ))}
        </select>
      )}
      {!loading && folders.length === 0 && <p>No folders found</p>}
    </div>
  );
};

export default GoogleDriveComponent;
