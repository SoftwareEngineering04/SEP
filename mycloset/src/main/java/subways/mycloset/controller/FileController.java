package subways.mycloset.controller;

import org.apache.commons.io.FilenameUtils;
import org.apache.commons.lang3.RandomStringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import subways.mycloset.dao.FilesDao;
import subways.mycloset.dao.UserDao;
import subways.mycloset.dto.Files;

import javax.servlet.http.HttpServletRequest;
import java.io.File;
import java.io.IOException;
import java.util.Locale;


@RestController
@RequestMapping("/api")
public class FileController {

    @Autowired
    FilesDao filesDao;

    @GetMapping("/test")
    public String downFile(Model model){
        Files file = filesDao.findfile(1);
        System.out.println(file.getFileName());
        model.addAttribute("file", file);

        return "file/image";
    }

    @RequestMapping(value="/fileupload", method = {RequestMethod.GET, RequestMethod.POST})
    public String fileUpload(HttpServletRequest req, @RequestParam(value = "img") MultipartFile file){

        Files files = new Files();
        String sourceFileName = file.getOriginalFilename();
        String sourceFileNameExtension = FilenameUtils.getExtension(sourceFileName).toLowerCase();
        FilenameUtils.removeExtension(sourceFileName);

        File destinationFile;
        String destinationFileName;
        String fileUrl = "C:\\github\\SEP\\mycloset\\src\\main\\resources\\images\\";

        do{
            destinationFileName = RandomStringUtils.randomAlphanumeric(32 ) + "." + sourceFileNameExtension;
            destinationFile = new File(fileUrl + destinationFileName);
        }while(destinationFile.exists());

        destinationFile.getParentFile().mkdirs();

        try{
            file.transferTo(destinationFile);
        }catch (IOException e){
            System.out.println("error");
        }

        files.setFId(4);
        files.setCId(4);
        files.setFileName(destinationFileName);
        files.setFileOriName(sourceFileName);
        files.setFileUrl(fileUrl);

        filesDao.fileUpload(files);

        System.out.println(file.getOriginalFilename());
        System.out.println(file.getContentType());
        System.out.println(file.getResource());


        return "o";
    }

}
