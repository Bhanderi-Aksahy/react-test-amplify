import React, { useEffect, useState } from 'react';
import { fetchLogFile } from '../aws-export';

function LogviewPage() {
  const [LogFile, setLogFile] = useState('');

  useEffect(() => {
    async function fetchData() {
      try {
        const fileContent = await fetchLogFile();
        console.log("fileContent ::", fileContent);
        setLogFile(fileContent);
      } catch (error) {
        console.error(error);
      }
    }

    fetchData();
  }, []);

  return (
    <div>
      <h1>Log File</h1>
      <pre>{LogFile}</pre>
    </div>
  );
}

export default LogviewPage;

