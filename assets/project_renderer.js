// Functions.

function render_project(project_name,
                        figure_path,
                        title_name,
                        author_list,
                        material_list,
                        award_name=null) {
    var list = document.getElementsByName(project_name);
    for (var proj_idx = 0; proj_idx < list.length; proj_idx++) {
        var img = document.createElement('img');
        img.src = figure_path;
        img.setAttribute('style',
                        'width: 100%; max-height: 120px; object-fit: cover;');

        var title = document.createElement('div');
        title.setAttribute('class', 'title');
        title.innerHTML = title_name;

        var author = document.createElement('div');
        author.setAttribute('class', 'author');
        author.innerHTML = '';
        for (var idx = 0; idx < author_list.length; idx++) {
            if (idx < author_list.length - 1 &&
                (author_list[idx + 1] === 'equal' ||
                author_list[idx + 1] === 'corresponding')) {
                author.innerHTML += (
                    '<span name="' +
                    author_list[idx] +
                    '" title="' +
                    author_list[idx + 1] +
                    '"></span>');
                idx++
            } else {
                author.innerHTML += (
                    '<span name="' +
                    author_list[idx] +
                    '" title="' +
                    '"></span>');
            }
            if (idx < author_list.length - 1) {
                author.innerHTML += ', ';
            }
        }

        var material = document.createElement('div');
        material.setAttribute('class', 'material');
        material_list.innerHTML = '';
        for (var idx = 0; idx < material_list.length; idx++) {
            material.innerHTML += (
                '<a href="' +
                material_list[idx][1] +
                '" target="_blank">' +
                material_list[idx][0] +
                '</a>');
            if (idx < material_list.length - 1) {
                material.innerHTML += ' / ';
            }
        }

        if (award_name) {
            var award = document.createElement('div');
            award.setAttribute('class', 'award');
            award.innerHTML = award_name;
        }

        var row = document.getElementsByName(project_name)[proj_idx];
        var cell = row.insertCell(0);
        cell.setAttribute('width', '25%');
        cell.appendChild(img);
        cell = row.insertCell(1);
        cell.appendChild(title);
        cell.appendChild(author);
        cell.appendChild(material);
        if (award_name) {
            cell.appendChild(award);
        }
    }
};

function render_author(author_name, link=null, alias=null) {
    var list = document.getElementsByName(author_name);
    for (var idx = 0; idx < list.length; idx++) {
        var contribution = list[idx].title;
        var tailing = '';
        if (contribution === 'equal') {
            tailing = '*';
        } else if (contribution === 'corresponding') {
            tailing = '<sup>+<sup>';
        }

        var context = '';
        if (alias) {
            context = alias + tailing;
        } else {
            context = author_name.replace(' ', '&nbsp;') + tailing;
        }

        if (link) {
            list[idx].innerHTML = (
                '<a href="' +
                link +
                '" target="_blank">' +
                '<span style="white-space:nowrap">' + context + '</span>' +
                '</a>');
        } else {
            list[idx].innerHTML = context;
        }

        if (author_name === 'Yujun Shen') {
            list[idx].setAttribute('class', 'me');
        }
    }
};










// Template.

render_project(
    project_name='template',
    figure_path='./assets/projects/',
    title_name='',
    author_list=[
        '',
    ],
    material_list=[
        ['Paper', ''],
        ['Project', ''],
        ['Code', ''],
        ['Demo', ''],
    ],
    award_name=null,
);










// Projects.

render_project(
    project_name='PlanarSplatting',
    figure_path='./assets/projects/planarsplatting.gif',
    title_name='PlanarSplatting: Accurate Planar Surface Reconstruction in 3 Minutes',
    author_list=[
        'Bin Tan',
        'Rui Yu',
        'Yujun Shen',
        'Nan Xue',
    ],
    material_list=[
        ['arXiv', 'https://arxiv.org/pdf/2412.03451.pdf'],
        ['Project', 'https://icetttb.github.io/PlanarSplatting/'],
    ],
    award_name=null,
);

render_project(
    project_name='ReCFG',
    figure_path='./assets/projects/recfg.jpg',
    title_name='Rectified Diffusion Guidance for Conditional Generation',
    author_list=[
        'Mengfei Xia',
        'Nan Xue',
        'Yujun Shen',
        'Ran Yi',
        'Tieliang Gong',
        'Yong-Jin Liu',
    ],
    material_list=[
        ['arXiv', 'https://arxiv.org/pdf/2410.18737.pdf'],
    ],
    award_name=null,
);

render_project(
    project_name='EnvGS',
    figure_path='./assets/projects/envgs.gif',
    title_name='EnvGS: Modeling View-Dependent Appearance with Environment Gaussian',
    author_list=[
        'Tao Xie', 'equal',
        'Xi Chen ZJU', 'equal',
        'Zhen Xu',
        'Yiman Xie',
        'Yudong Jin',
        'Yujun Shen',
        'Sida Peng',
        'Hujun Bao',
        'Xiaowei Zhou',
    ],
    material_list=[
        ['arXiv', 'https://arxiv.org/pdf/2412.15215.pdf'],
        ['Project', 'https://zju3dv.github.io/envgs/'],
        ['Code', 'https://github.com/zju3dv/EnvGS'],
    ],
    award_name=null,
);

render_project(
    project_name='Mimir',
    figure_path='./assets/projects/mimir.gif',
    title_name='Mimir: Improving Video Diffusion Models for Precise Text Understanding',
    author_list=[
        'Shuai Tan', 'equal',
        'Biao Gong', 'equal',
        'Yutong Feng',
        'Kecheng Zheng',
        'Dandan Zheng',
        'Shuwei Shi',
        'Yujun Shen',
        'Jingdong Chen',
        'Ming Yang',

    ],
    material_list=[
        ['arXiv', 'https://arxiv.org/pdf/2412.03085.pdf'],
        ['Project', 'https://lucaria-academy.github.io/Mimir/'],
    ],
    award_name=null,
);

render_project(
    project_name='Lumos',
    figure_path='./assets/projects/lumos.jpg',
    title_name='Learning Visual Generative Priors without Text',
    author_list=[
        'Shuailei Ma', 'equal',
        'Kecheng Zheng', 'equal',
        'Ying Wei', 'corresponding',
        'Wei Wu',
        'Fan Lu',
        'Yifei Zhang',
        'Chen-Wei Xie',
        'Biao Gong',
        'Jiapeng Zhu',
        'Yujun Shen', 'corresponding',
    ],
    material_list=[
        ['arXiv', 'https://arxiv.org/pdf/2412.07767.pdf'],
        ['Project', 'https://xiaomabufei.github.io/lumos/'],
        ['Code', 'https://github.com/ant-research/lumos'],
    ],
    award_name=null,
);

render_project(
    project_name='Framer',
    figure_path='./assets/projects/framer.gif',
    title_name='Framer: Interactive Frame Interpolation',
    author_list=[
        'Wen Wang',
        'Qiuyu Wang',
        'Kecheng Zheng',
        'Hao Ouyang',
        'Zhekai Chen',
        'Biao Gong',
        'Hao Chen',
        'Yujun Shen',
        'Chunhua Shen',
    ],
    material_list=[
        ['ICLR 2025', 'https://arxiv.org/pdf/2410.18978.pdf'],
        ['Project', 'https://aim-uofa.github.io/Framer/'],
        ['Code', 'https://github.com/aim-uofa/Framer'],
        ['Demo', 'https://www.youtube.com/watch?v=4MPGKgn7jRc'],
    ],
    award_name=null,
);

render_project(
    project_name='MagicQuill',
    figure_path='./assets/projects/magicquill.gif',
    title_name='MagicQuill: An Intelligent Interactive Image Editing System',
    author_list=[
        'Zichen Liu', 'equal',
        'Yue Yu', 'equal',
        'Hao Ouyang',
        'Qiuyu Wang',
        'Ka Leong Cheng',
        'Wen Wang',
        'Zhiheng Liu',
        'Qifeng Chen', 'corresponding',
        'Yujun Shen', 'corresponding',
    ],
    material_list=[
        ['arXiv', 'https://arxiv.org/pdf/2411.09703.pdf'],
        ['Project', 'https://magicquill.art/demo/'],
        ['Code', 'https://github.com/magic-quill/magicquill'],
        ['Demo', 'https://www.youtube.com/watch?v=5DiKfONMnE4'],
    ],
    award_name=null,
);

render_project(
    project_name='AniDoc',
    figure_path='./assets/projects/anidoc.gif',
    title_name='AniDoc: Animation Creation Made Easier',
    author_list=[
        'Yihao Meng',
        'Hao Ouyang',
        'Hanlin Wang',
        'Qiuyu Wang',
        'Wen Wang',
        'Ka Leong Cheng',
        'Zhiheng Liu',
        'Yujun Shen',
        'Huamin Qu',
    ],
    material_list=[
        ['arXiv', 'https://arxiv.org/pdf/2412.14173.pdf'],
        ['Project', 'https://yihao-meng.github.io/AniDoc_demo/'],
        ['Code', 'https://github.com/yihao-meng/AniDoc'],
    ],
    award_name=null,
);

render_project(
    project_name='LeviTor',
    figure_path='./assets/projects/levitor.gif',
    title_name='LeviTor: 3D Trajectory Oriented Image-to-Video Synthesis',
    author_list=[
        'Hanlin Wang',
        'Hao Ouyang',
        'Qiuyu Wang',
        'Wen Wang',
        'Ka Leong Cheng',
        'Qifeng Chen',
        'Yujun Shen',
        'Limin Wang',
    ],
    material_list=[
        ['arXiv', 'https://arxiv.org/pdf/2412.15214.pdf'],
        ['Project', 'https://ppetrichor.github.io/levitor.github.io/'],
        ['Code', 'https://github.com/ant-research/LeviTor'],
    ],
    award_name=null,
);

render_project(
    project_name='DepthLab',
    figure_path='./assets/projects/depthlab.jpg',
    title_name='DepthLab: From Partial to Complete',
    author_list=[
        'Zhiheng Liu', 'equal',
        'Ka Leong Cheng', 'equal',
        'Qiuyu Wang',
        'Shuzhe Wang',
        'Hao Ouyang',
        'Bin Tan',
        'Kai Zhu',
        'Yujun Shen',
        'Qifeng Chen', 'corresponding',
        'Ping Luo', 'corresponding',
    ],
    material_list=[
        ['arXiv', 'https://arxiv.org/pdf/2412.18153.pdf'],
        ['Project', 'https://johanan528.github.io/depthlab_web/'],
        ['Code', 'https://github.com/Johanan528/DepthLab'],
        ['Demo', 'https://www.youtube.com/watch?v=PObShPSRiDo'],
    ],
    award_name=null,
);

render_project(
    project_name='Edicho',
    figure_path='./assets/projects/edicho.jpg',
    title_name='Edicho: Consistent Image Editing in the Wild',
    author_list=[
        'Qingyan Bai',
        'Hao Ouyang',
        'Yinghao Xu',
        'Qiuyu Wang',
        'Ceyuan Yang',
        'Ka Leong Cheng',
        'Yujun Shen', 'corresponding',
        'Qifeng Chen', 'corresponding',
    ],
    material_list=[
        ['arXiv', 'https://arxiv.org/pdf/2412.21079.pdf'],
        ['Project', 'https://ant-research.github.io/edicho/'],
        ['Code', 'https://github.com/ant-research/edicho'],
    ],
    award_name=null,
);

render_project(
    project_name='MangaNinja',
    figure_path='./assets/projects/manganinja.gif',
    title_name='MangaNinja: Line Art Colorization with Precise Reference Following',
    author_list=[
        'Zhiheng Liu', 'equal',
        'Ka Leong Cheng', 'equal',
        'Xi Chen',
        'Jie Xiao',
        'Hao Ouyang',
        'Kai Zhu',
        'Yu Liu',
        'Yujun Shen',
        'Qifeng Chen',
        'Ping Luo',
    ],
    material_list=[
        ['arXiv', 'https://arxiv.org/pdf/2501.08332.pdf'],
    ],
    award_name=null,
);

render_project(
    project_name='CompreCap',
    figure_path='./assets/projects/comprecap.jpg',
    title_name='Benchmarking Large Vision-Language Models via Directed Scene Graph for Comprehensive Image Captioning',
    author_list=[
        'Fan Lu', 'equal',
        'Wei Wu', 'equal',
        'Kecheng Zheng',
        'Shuailei Ma',
        'Biao Gong',
        'Jiawei Liu',
        'Wei Zhai',
        'Yang Cao',
        'Yujun Shen',
        'Zheng-Jun Zha',
    ],
    material_list=[
        ['arXiv', 'https://arxiv.org/pdf/2412.08614.pdf'],
        ['Code', 'https://github.com/LuFan31/CompreCap'],
    ],
    award_name=null,
);

render_project(
    project_name='Prometheus',
    figure_path='./assets/projects/prometheus.jpg',
    title_name='Prometheus: 3D-Aware Latent Diffusion Models for Feed-Forward Text-to-3D Scene',
    author_list=[
        'Yuanbo Yang', 'equal',
        'Jiahao Shao', 'equal',
        'Xinyang Li',
        'Yujun Shen',
        'Andreas Geiger',
        'Yiyi Liao',
    ],
    material_list=[
        ['arXiv', 'https://arxiv.org/pdf/2412.21117.pdf'],
        ['Project', 'https://freemty.github.io/project-prometheus/'],
        ['Code', 'https://github.com/XDimLab/Prometheus'],
        ['Demo', 'https://www.youtube.com/watch?v=N_L_ecSiIJA'],
    ],
    award_name=null,
);

render_project(
    project_name='Ready-to-React',
    figure_path='./assets/projects/ready-to-react.gif',
    title_name='Ready-to-React: Online Reaction Policy for Two-Character Interaction Generation',
    author_list=[
        'Zhi Cen',
        'Huaijin Pi',
        'Sida Peng',
        'Qing Shuai',
        'Yujun Shen',
        'Hujun Bao',
        'Xiaowei Zhou',
        'Ruizhen Hu',
    ],
    material_list=[
        ['ICLR 2025', 'https://openreview.net/pdf?id=mm0cqJ2O3f'],
    ],
    award_name=null,
);

render_project(
    project_name='UniRestore3D',
    figure_path='./assets/projects/unirestore3d.jpg',
    title_name='UniRestore3D: A Scalable Framework For General Shape Restoration',
    author_list=[
        'Yuang Wang',
        'Yujian Zhang',
        'Sida Peng',
        'Xingyi He',
        'Haoyu Guo',
        'Yujun Shen',
        'Hujun Bao',
        'Xiaowei Zhou',
    ],
    material_list=[
        ['ICLR 2025', 'https://openreview.net/pdf?id=xPO6fwvldG'],
    ],
    award_name=null,
);

render_project(
    project_name='Uni-AD',
    figure_path='./assets/projects/uni-ad.jpg',
    title_name='Contextual AD Narration with Interleaved Multimodal Sequence',
    author_list=[
        'Hanlin Wang',
        'Zhan Tong',
        'Kecheng Zheng',
        'Yujun Shen',
        'Limin Wang',
    ],
    material_list=[
        ['arXiv', 'https://arxiv.org/pdf/2403.12922.pdf'],
    ],
    award_name=null,
);

render_project(
    project_name='LoTLIP',
    figure_path='./assets/projects/lotlip.jpg',
    title_name='LoTLIP: Improving Language-Image Pre-training for Long Text Understanding',
    author_list=[
        'Wei Wu',
        'Kecheng Zheng',
        'Shuailei Ma',
        'Fan Lu',
        'Yuxin Guo',
        'Yifei Zhang',
        'Wei Chen',
        'Qingpei Guo',
        'Yujun Shen',
        'Zheng-Jun Zha',
    ],
    material_list=[
        ['NeurIPS 2024', 'https://arxiv.org/pdf/2410.05249.pdf'],
        ['Project', 'https://wuw2019.github.io/lot-lip/'],
        ['Code', 'https://github.com/wuw2019/LoTLIP'],
    ],
    award_name=null,
);

render_project(
    project_name='GANdance',
    figure_path='./assets/projects/gandance.jpg',
    title_name='Exploring Guided Sampling of Conditional GANs',
    author_list=[
        'Yifei Zhang', 'equal',
        'Mengfei Xia', 'equal',
        'Yujun Shen',
        'Jiapeng Zhu',
        'Ceyuan Yang',
        'Kecheng Zheng',
        'Lianghua Huang',
        'Yu Liu',
        'Fan Cheng',
    ],
    material_list=[
        ['ECCV 2024', 'https://www.ecva.net/papers/eccv_2024/papers_ECCV/papers/03700.pdf'],
        ['Code', 'https://github.com/zyf0619sjtu/GANdance'],
    ],
    award_name=null,
);

render_project(
    project_name='MimicBrush',
    figure_path='./assets/projects/mimicbrush.gif',
    title_name='Zero-shot Image Editing with Reference Imitation',
    author_list=[
        'Xi Chen',
        'Yutong Feng',
        'Mengting Chen',
        'Yiyang Wang',
        'Shilong Zhang',
        'Yu Liu',
        'Yujun Shen',
        'Hengshuang Zhao',
    ],
    material_list=[
        ['NeurIPS 2024', 'https://arxiv.org/pdf/2406.07547.pdf'],
        ['Project', 'https://xavierchen34.github.io/MimicBrush-Page/'],
        ['Code', 'https://github.com/ali-vilab/MimicBrush'],
        ['Demo', 'https://www.youtube.com/watch?v=1CgpvGxL7uU'],
    ],
    award_name=null,
);

render_project(
    project_name='ChronoDepth',
    figure_path='./assets/projects/chronodepth.gif',
    title_name='Learning Temporally Consistent Video Depth from Video Diffusion Priors',
    author_list=[
        'Jiahao Shao', 'equal',
        'Yuanbo Yang', 'equal',
        'Hongyu Zhou',
        'Youmin Zhang',
        'Yujun Shen',
        'Matteo Poggi',
        'Yiyi Liao',
    ],
    material_list=[
        ['arXiv', 'https://arxiv.org/pdf/2406.01493.pdf'],
        ['Project', 'https://jhaoshao.github.io/ChronoDepth/'],
        ['Code', 'https://github.com/jhaoshao/ChronoDepth'],
        ['Demo', 'https://www.youtube.com/watch?v=PuoKWLB9g_s'],
    ],
    award_name=null,
);

render_project(
    project_name='GaussianPrediction',
    figure_path='./assets/projects/gaussianprediction.gif',
    title_name='GaussianPrediction: Dynamic 3D Gaussian Prediction for Motion Extrapolation and Free View Synthesis',
    author_list=[
        'Boming Zhao', 'equal',
        'Yuan Li', 'equal',
        'Ziyu Sun',
        'Lin Zeng',
        'Yujun Shen',
        'Rui Ma',
        'Yinda Zhang',
        'Hujun Bao',
        'Zhaopeng Cui',
    ],
    material_list=[
        ['SIGGRAPH 2024 (Conference Track)', 'https://arxiv.org/pdf/2405.19745.pdf'],
        ['Project', 'https://zju3dv.github.io/gaussian-prediction/'],
        ['Code', 'https://github.com/BoMingZhao/GaussianPrediction'],
        ['Demo', 'https://www.youtube.com/watch?v=Y0f3fQ18qAc'],
    ],
    award_name=null,
);

render_project(
    project_name='MaPa',
    figure_path='./assets/projects/mapa.gif',
    title_name='MaPa: Text-driven Photorealistic Material Painting for 3D Shapes',
    author_list=[
        'Shangzhan Zhang',
        'Sida Peng',
        'Tao Xu',
        'Yuanbo Yang',
        'Tianrun Chen',
        'Nan Xue',
        'Yujun Shen',
        'Hujun Bao',
        'Ruizhen Hu',
        'Xiaowei Zhou',
    ],
    material_list=[
        ['SIGGRAPH 2024 (Conference Track)', 'https://arxiv.org/pdf/2404.17569.pdf'],
        ['Project', 'https://zhanghe3z.github.io/MaPa/'],
        ['Demo', 'https://www.youtube.com/watch?v=Op5PU1GmSsQ'],
    ],
    award_name=null,
)

render_project(
    project_name='InFusion',
    figure_path='./assets/projects/infusion.gif',
    title_name='InFusion: Inpainting 3D Gaussians via Learning Depth Completion from Diffusion Prior',
    author_list=[
        'Zhiheng Liu', 'equal',
        'Hao Ouyang', 'equal',
        'Qiuyu Wang',
        'Ka Leong Cheng',
        'Jie Xiao',
        'Kai Zhu',
        'Nan Xue',
        'Yu Liu',
        'Yujun Shen',
        'Yang Cao',
    ],
    material_list=[
        ['arXiv', 'https://arxiv.org/pdf/2404.11613.pdf'],
        ['Project', 'https://johanan528.github.io/Infusion/'],
        ['Code', 'https://github.com/ali-vilab/infusion'],
    ],
    award_name=null,
);

render_project(
    project_name='TeFF',
    figure_path='./assets/projects/teff.gif',
    title_name='TeFF: Learning 3D-Aware GANs from Unposed Images with Template Feature Field',
    author_list=[
        'Xinya Chen',
        'Hanlei Guo',
        'Yanrui Bin',
        'Shangzhan Zhang',
        'Yuanbo Yang',
        'Yue Wang',
        'Yujun Shen',
        'Yiyi Liao',
    ],
    material_list=[
        ['ECCV 2024', 'https://arxiv.org/pdf/2404.05705.pdf'],
        ['Project', 'https://xdimlab.github.io/TeFF/'],
        ['Code', 'https://github.com/XinyaChen21/TeFF'],
    ],
    award_name='Oral presentation',
);

render_project(
    project_name='DreamLIP',
    figure_path='./assets/projects/dreamlip.jpg',
    title_name='DreamLIP: Language-Image Pre-training with Long Captions',
    author_list=[
        'Kecheng Zheng', 'equal',
        'Yifei Zhang', 'equal',
        'Wei Wu',
        'Fan Lu',
        'Shuailei Ma',
        'Xin Jin',
        'Wei Chen',
        'Yujun Shen', 'corresponding',
    ],
    material_list=[
        ['ECCV 2024', 'https://arxiv.org/pdf/2403.17007.pdf'],
        ['Project', 'https://zyf0619sjtu.github.io/dream-lip/'],
        ['Code', 'https://github.com/zyf0619sjtu/DreamLIP'],
    ],
    award_name=null,
);

render_project(
    project_name='FlashFace',
    figure_path='./assets/projects/flashface.jpg',
    title_name='FlashFace: Human Image Personalization with High-fidelity Identity Preservation',
    author_list=[
        'Shilong Zhang',
        'Lianghua Huang',
        'Xi Chen',
        'Yifei Zhang',
        'Zhi-Fan Wu',
        'Yutong Feng',
        'Wei Wang',
        'Yujun Shen',
        'Yu Liu',
        'Ping Luo',
    ],
    material_list=[
        ['arXiv', 'https://arxiv.org/pdf/2403.17008.pdf'],
        ['Project', 'https://jshilong.github.io/flashface-page/'],
        ['Code', 'https://github.com/jshilong/FlashFace'],
    ],
    award_name=null,
);

render_project(
    project_name='GRM',
    figure_path='./assets/projects/grm.gif',
    title_name='GRM: Large Gaussian Reconstruction Model for Efficient 3D Reconstruction and Generation',
    author_list=[
        'Yinghao Xu', 'equal',
        'Zifan Shi', 'equal',
        'Yifan Wang',
        'Hansheng Chen',
        'Ceyuan Yang',
        'Sida Peng',
        'Yujun Shen',
        'Gordon Wetzstein',
    ],
    material_list=[
        ['ECCV 2024', 'https://arxiv.org/pdf/2403.14621.pdf'],
        ['Project', 'https://justimyhxu.github.io/projects/grm/'],
        ['Code', 'https://github.com/justimyhxu/grm'],
    ],
    award_name=null,
);

render_project(
    project_name='GauMesh',
    figure_path='./assets/projects/gaumesh.gif',
    title_name='Bridging 3D Gaussian and Mesh for Freeview Video Rendering',
    author_list=[
        'Yuting Xiao',
        'Xuan Wang',
        'Jiafei Li',
        'Hongrui Cai',
        'Yanbo Fan',
        'Nan Xue',
        'Minghui Yang',
        'Yujun Shen',
        'Shenghua Gao',
    ],
    material_list=[
        ['arXiv', 'https://arxiv.org/pdf/2403.11453.pdf'],
    ],
    award_name=null,
);

render_project(
    project_name='3DPE',
    figure_path='./assets/projects/3dpe.jpg',
    title_name='Real-time 3D-aware Portrait Editing from a Single Image',
    author_list=[
        'Qingyan Bai',
        'Zifan Shi',
        'Yinghao Xu',
        'Hao Ouyang',
        'Qiuyu Wang',
        'Ceyuan Yang',
        'Xuan Wang',
        'Gordon Wetzstein',
        'Yujun Shen', 'corresponding',
        'Qifeng Chen', 'corresponding',
    ],
    material_list=[
        ['ECCV 2024', 'https://arxiv.org/pdf/2402.14000.pdf'],
    ],
    award_name=null,
);

render_project(
    project_name='SpatialTracker',
    figure_path='./assets/projects/spatialtracker.gif',
    title_name='SpatialTracker: Tracking Any 2D Pixels in 3D Space',
    author_list=[
        'Yuxi Xiao', 'equal',
        'Qianqian Wang', 'equal',
        'Shangzhan Zhang',
        'Nan Xue',
        'Sida Peng',
        'Yujun Shen',
        'Xiaowei Zhou',
    ],
    material_list=[
        ['CVPR 2024', 'https://arxiv.org/pdf/2404.04319.pdf'],
        ['Project', 'https://henry123-boy.github.io/SpaTracker/'],
        ['Code', 'https://github.com/henry123-boy/SpaTracker'],
    ],
    award_name='Highlight presentation',
);

render_project(
    project_name='NEAT',
    figure_path='./assets/projects/neat.gif',
    title_name='NEAT: Distilling 3D Wireframes from Neural Attraction Fields',
    author_list=[
        'Nan Xue',
        'Bin Tan',
        'Yuxi Xiao',
        'Liang Dong',
        'Gui-Song Xia',
        'Tianfu Wu',
        'Yujun Shen', 'corresponding',
    ],
    material_list=[
        ['CVPR 2024', 'https://arxiv.org/pdf/2307.10206.pdf'],
        ['Project', 'https://github.com/cherubicxn/neat'],
        ['Code', 'https://github.com/cherubicxn/neat'],
        ['Demo', 'https://www.youtube.com/watch?v=qtBQYbOpVpc'],
    ],
    award_name=null,
);

render_project(
    project_name='TF-T2V',
    figure_path='./assets/projects/tf-t2v.gif',
    title_name='A Recipe for Scaling up Text-to-Video Generation with Text-free Videos',
    author_list=[
        'Xiang Wang',
        'Shiwei Zhang',
        'Hangjie Yuan',
        'Zhiwu Qing',
        'Biao Gong',
        'Yingya Zhang',
        'Yujun Shen',
        'Changxin Gao',
        'Nong Sang',
    ],
    material_list=[
        ['CVPR 2024', 'https://arxiv.org/pdf/2312.15770.pdf'],
        ['Project', 'https://tf-t2v.github.io/'],
        ['Code', 'https://github.com/ali-vilab/VGen'],
    ],
    award_name=null,
);

render_project(
    project_name='TagAlign',
    figure_path='./assets/projects/tagalign.gif',
    title_name='TagAlign: Improving Vision-Language Alignment with Multi-Tag Classification',
    author_list=[
        'Qinying Liu', 'equal',
        'Wei Wu', 'equal',
        'Kecheng Zheng', 'corresponding',
        'Zhan Tong',
        'Jiawei Liu',
        'Yu Liu',
        'Wei Chen',
        'Zilei Wang', 'corresponding',
        'Yujun Shen',
    ],
    material_list=[
        ['arXiv', 'https://arxiv.org/pdf/2312.14149.pdf'],
        ['Project', 'https://qinying-liu.github.io/Tag-Align/'],
        ['Code', 'https://github.com/Qinying-Liu/TagAlign_code'],
    ],
    award_name=null,
);

render_project(
    project_name='SAM-Graph',
    figure_path='./assets/projects/sam-graph.gif',
    title_name='SAM-guided Graph Cut for 3D Instance Segmentation',
    author_list=[
        'Haoyu Guo', 'equal',
        'He Zhu', 'equal',
        'Sida Peng',
        'Yuang Wang',
        'Yujun Shen',
        'Ruizhen Hu',
        'Xiaowei Zhou',
    ],
    material_list=[
        ['ECCV 2024', 'https://arxiv.org/pdf/2312.08372.pdf'],
        ['Project', 'https://zju3dv.github.io/sam_graph/'],
        ['Code', 'https://github.com/zju3dv/SAM-Graph'],
        ['Demo', 'https://www.youtube.com/watch?v=daWiQiFPpZ0'],
    ],
    award_name=null,
);

render_project(
    project_name='CCM',
    figure_path='./assets/projects/ccm.jpg',
    title_name='CCM: Adding Conditional Controls to Text-to-Image Consistency Models',
    author_list=[
        'Jie Xiao',
        'Kai Zhu',
        'Han Zhang',
        'Zhiheng Liu',
        'Yujun Shen',
        'Zhantao Yang',
        'Ruili Feng',
        'Yu Liu',
        'Xueyang Fu',
        'Zheng-Jun Zha',
    ],
    material_list=[
        ['ICML 2024', 'https://arxiv.org/pdf/2312.06971.pdf'],
        ['Project', 'https://swiftforce.github.io/CCM/'],
    ],
    award_name=null,
);

render_project(
    project_name='HeadArtist',
    figure_path='./assets/projects/headartist.gif',
    title_name='HeadArtist: Text-conditioned 3D Head Generation with Self Score Distillation',
    author_list=[
        'Hongyu Liu',
        'Xuan Wang', 'corresponding',
        'Ziyu Wan',
        'Yujun Shen',
        'Yibing Song',
        'Jing Liao',
        'Qifeng Chen', 'corresponding',
    ],
    material_list=[
        ['SIGGRAPH 2024 (Conference Track)', 'https://arxiv.org/pdf/2312.07539.pdf'],
        ['Project', 'https://kumapowerliu.github.io/HeadArtist/'],
        ['Code', 'https://github.com/KumapowerLIU/HeadArtist'],
    ],
    award_name=null,
);

render_project(
    project_name='AGAP',
    figure_path='./assets/projects/agap.gif',
    title_name='Learning Naturally Aggregated Appearance for Efficient 3D Editing',
    author_list=[
        'Ka Leong Cheng',
        'Qiuyu Wang',
        'Zifan Shi',
        'Kecheng Zheng',
        'Yinghao Xu',
        'Hao Ouyang',
        'Qifeng Chen', 'corresponding',
        'Yujun Shen', 'corresponding',
    ],
    material_list=[
        ['3DV 2025', 'https://arxiv.org/pdf/2312.06657.pdf'],
        ['Project', 'https://felixcheng97.github.io/AGAP/'],
        ['Code', 'https://github.com/felixcheng97/AGAP'],
        ['Demo', 'https://felixcheng97.github.io/AGAP_Demo/'],
    ],
    award_name=null,
);

render_project(
    project_name='GenDeF',
    figure_path='./assets/projects/gendef.gif',
    title_name='GenDeF: Learning Generative Deformation Field for Video Generation',
    author_list=[
        'Wen Wang',
        'Kecheng Zheng',
        'Qiuyu Wang',
        'Hao Chen', 'corresponding',
        'Zifan Shi',
        'Ceyuan Yang',
        'Yujun Shen', 'corresponding',
        'Chunhua Shen',
    ],
    material_list=[
        ['arXiv', 'https://arxiv.org/pdf/2312.04561.pdf'],
        ['Project', 'https://aim-uofa.github.io/GenDeF/'],
        ['Code', 'https://github.com/aim-uofa/GenDeF'],
    ],
    award_name=null,
);

render_project(
    project_name='LivePhoto',
    figure_path='./assets/projects/livephoto.gif',
    title_name='LivePhoto: Real Image Animation with Text-guided Motion Control',
    author_list=[
        'Xi Chen',
        'Zhiheng Liu',
        'Mengting Chen',
        'Yutong Feng',
        'Yu Liu',
        'Yujun Shen',
        'Hengshuang Zhao',
    ],
    material_list=[
        ['ECCV 2024', 'https://arxiv.org/pdf/2312.02928.pdf'],
        ['Project', 'https://xavierchen34.github.io/LivePhoto-Page/'],
        ['Code', 'https://github.com/XavierCHEN34/LivePhoto'],
        ['Demo', 'https://www.youtube.com/watch?v=M2vzrTYAsQI'],
    ],
    award_name=null,
);

render_project(
    project_name='BerfScene',
    figure_path='./assets/projects/berfscene.gif',
    title_name='BerfScene: Bev-conditioned Equivariant Radiance Fields for Infinite 3D Scene Generation',
    author_list=[
        'Qihang Zhang',
        'Yinghao Xu',
        'Yujun Shen',
        'Bo Dai',
        'Bolei Zhou', 'corresponding',
        'Ceyuan Yang', 'corresponding',
    ],
    material_list=[
        ['CVPR 2024', 'https://arxiv.org/pdf/2312.02136.pdf'],
        ['Project', 'https://zqh0253.github.io/BerfScene/'],
        ['Code', 'https://github.com/zqh0253/BerfScene'],
    ],
    award_name=null,
);

render_project(
    project_name='SMaRt',
    figure_path='./assets/projects/smart.jpg',
    title_name='SMaRt: Improving GANs with Score Matching Regularity',
    author_list=[
        'Mengfei Xia',
        'Yujun Shen',
        'Ceyuan Yang',
        'Ran Yi',
        'Wenping Wang',
        'Yong-Jin Liu',
    ],
    material_list=[
        ['ICML 2024', 'https://arxiv.org/pdf/2311.18208.pdf'],
    ],
    award_name=null,
);

render_project(
    project_name='Ranni',
    figure_path='./assets/projects/ranni.gif',
    title_name='Ranni: Taming Text-to-Image Diffusion for Accurate Instruction Following',
    author_list=[
        'Yutong Feng',
        'Biao Gong',
        'Di Chen',
        'Yujun Shen',
        'Yu Liu',
        'Jingren Zhou',
    ],
    material_list=[
        ['CVPR 2024', 'https://arxiv.org/pdf/2311.17002.pdf'],
        ['Project', 'https://ranni-t2i.github.io/Ranni/'],
    ],
    award_name='Oral presentation',
);

render_project(
    project_name='ScaNeRF',
    figure_path='./assets/projects/scanerf.gif',
    title_name='ScaNeRF: Scalable Bundle-Adjusting Neural Radiance Fields for Large-Scale Scene Rendering',
    author_list=[
        'Xiuchao Wu',
        'Jiamin Xu',
        'Xin Zhang',
        'Hujun Bao',
        'Qixing Huang',
        'Yujun Shen',
        'James Tompkin',
        'Weiwei Xu',
    ],
    material_list=[
        ['SIGGRAPH Asia 2023 (Journal Track)', 'https://xchaowu.github.io/papers/scanerf/scanerf.pdf'],
        ['Project', 'https://xchaowu.github.io/papers/scanerf/'],
        ['Demo', 'https://www.youtube.com/watch?v=ylqZxQS2u6c'],
    ],
    award_name=null,
);

render_project(
    project_name='FaceComposer',
    figure_path='./assets/projects/facecomposer.jpg',
    title_name='FaceComposer: A Unified Model for Versatile Facial Content Creation',
    author_list=[
        'Jiayu Wang', 'equal',
        'Kang Zhao', 'equal',
        'Yifeng Ma', 'equal',
        'Shiwei Zhang',
        'Yingya Zhang',
        'Yujun Shen',
        'Deli Zhao',
        'Jingren Zhou',
    ],
    material_list=[
        ['NeurIPS 2023', 'https://openreview.net/pdf?id=xrK3QA9mLo'],
    ],
    award_name=null,
);

render_project(
    project_name='CompactVV',
    figure_path='./assets/projects/compactvv.jpg',
    title_name='Compact Neural Volumetric Video Representations with Dynamic Codebooks',
    author_list=[
        'Haoyu Guo',
        'Sida Peng', 'corresponding',
        'Yunzhi Yan',
        'Linzhan Mou',
        'Yujun Shen',
        'Hujun Bao',
        'Xiaowei Zhou',
    ],
    material_list=[
        ['NeurIPS 2023', 'https://openreview.net/pdf?id=xTgM7XLN9P'],
        ['Code', 'https://github.com/zju3dv/compact_vv'],
    ],
    award_name=null,
);

render_project(
    project_name='Res-Tuning',
    figure_path='./assets/projects/res-tuning.jpg',
    title_name='Res-Tuning: A Flexible and Efficient Tuning Paradigm via Unbinding Tuner from Backbone',
    author_list=[
        'Zeyinzi Jiang',
        'Chaojie Mao',
        'Ziyuan Huang',
        'Ao Ma',
        'Yiliang Lv',
        'Yujun Shen',
        'Deli Zhao',
        'Jingren Zhou',
    ],
    material_list=[
        ['NeurIPS 2023', 'https://arxiv.org/pdf/2310.19859.pdf'],
        ['Project', 'https://res-tuning.github.io/'],
        ['Code', 'https://github.com/modelscope/swift'],
    ],
    award_name=null,
);

render_project(
    project_name='4K4D',
    figure_path='./assets/projects/4k4d.gif',
    title_name='4K4D: Real-Time 4D View Synthesis at 4K Resolution',
    author_list=[
        'Zhen Xu',
        'Sida Peng',
        'Haotong Lin',
        'Guangzhao He',
        'Jiaming Sun',
        'Yujun Shen',
        'Hujun Bao',
        'Xiaowei Zhou',
    ],
    material_list=[
        ['CVPR 2024', 'https://arxiv.org/pdf/2310.11448.pdf'],
        ['Project', 'https://zju3dv.github.io/4k4d/'],
        ['Code', 'https://github.com/zju3dv/4K4D'],
    ],
    award_name=null,
);

render_project(
    project_name='TimeTuner',
    figure_path='./assets/projects/timetuner.jpg',
    title_name='Towards More Accurate Diffusion Model Acceleration with A Timestep Tuner',
    author_list=[
        'Mengfei Xia',
        'Yujun Shen',
        'Changsong Lei',
        'Yu Zhou',
        'Ran Yi',
        'Deli Zhao',
        'Wenping Wang',
        'Yong-Jin Liu',
    ],
    material_list=[
        ['CVPR 2024', 'https://arxiv.org/pdf/2310.09469.pdf'],
    ],
    award_name=null,
);

render_project(
    project_name='Aurora',
    figure_path='./assets/projects/aurora.jpg',
    title_name='Exploring Sparse MoE in GANs for Text-conditioned Image Synthesis',
    author_list=[
        'Jiapeng Zhu', 'equal',
        'Ceyuan Yang', 'equal',
        'Kecheng Zheng',
        'Yinghao Xu',
        'Zifan Shi',
        'Yujun Shen', 'corresponding',
    ],
    material_list=[
        ['arXiv', 'https://arxiv.org/pdf/2309.03904.pdf'],
        ['Code', 'https://github.com/zhujiapeng/Aurora'],
    ],
    award_name=null,
);

render_project(
    project_name='MTM',
    figure_path='./assets/projects/mtm.jpg',
    title_name='Learning Modulated Transformation in GANs',
    author_list=[
        'Ceyuan Yang',
        'Qihang Zhang',
        'Yinghao Xu',
        'Jiapeng Zhu',
        'Yujun Shen',
        'Bo Dai',
    ],
    material_list=[
        ['NeurIPS 2023', 'https://arxiv.org/pdf/2308.15472.pdf'],
        ['Code', 'https://github.com/limbo0000/mtm'],
    ],
    award_name=null,
);

render_project(
    project_name='CoDeF',
    figure_path='./assets/projects/codef.gif',
    title_name='CoDeF: Content Deformation Fields for Temporally Consistent Video Processing',
    author_list=[
        'Hao Ouyang', 'equal',
        'Qiuyu Wang', 'equal',
        'Yuxi Xiao', 'equal',
        'Qingyan Bai',
        'Juntao Zhang',
        'Kecheng Zheng',
        'Xiaowei Zhou',
        'Qifeng Chen', 'corresponding',
        'Yujun Shen', 'corresponding',
    ],
    material_list=[
        ['CVPR 2024', 'https://arxiv.org/pdf/2308.07926.pdf'],
        ['Project', 'https://qiuyu96.github.io/CoDeF/'],
        ['Code', 'https://github.com/qiuyu96/CoDeF'],
        ['Demo', 'https://ezioby.github.io/CoDeF_Demo/'],
    ],
    award_name='Highlight presentation',
);

render_project(
    project_name='AnyDoor',
    figure_path='./assets/projects/anydoor.gif',
    title_name='AnyDoor: Zero-shot Object-level Image Customization',
    author_list=[
        'Xi Chen',
        'Lianghua Huang',
        'Yu Liu',
        'Yujun Shen',
        'Deli Zhao',
        'Hengshuang Zhao',
    ],
    material_list=[
        ['CVPR 2024', 'https://arxiv.org/pdf/2307.09481.pdf'],
        ['Project', 'https://ali-vilab.github.io/AnyDoor-Page/'],
        ['Code', 'https://github.com/ali-vilab/AnyDoor'],
    ],
    award_name=null,
);

render_project(
    project_name='Carver',
    figure_path='./assets/projects/carver.jpg',
    title_name='Benchmarking and Analyzing 3D-aware Image Synthesis with a Modularized Codebase',
    author_list=[
        'Qiuyu Wang',
        'Zifan Shi',
        'Kecheng Zheng',
        'Yinghao Xu',
        'Sida Peng',
        'Yujun Shen', 'corresponding',
    ],
    material_list=[
        ['NeurIPS 2023 (D&B Track)', 'https://arxiv.org/pdf/2306.12423.pdf'],
        ['Code', 'https://github.com/qiuyu96/carver'],
    ],
    award_name=null,
);

render_project(
    project_name='VideoComposer',
    figure_path='./assets/projects/videocomposer.gif',
    title_name='VideoComposer: Compositional Video Synthesis with Motion Controllability',
    author_list=[
        'Xiang Wang', 'equal',
        'Hangjie Yuan', 'equal',
        'Shiwei Zhang', 'equal',
        'Dayou Chen', 'equal',
        'Jiuniu Wang',
        'Yingya Zhang',
        'Yujun Shen',
        'Deli Zhao',
        'Jingren Zhou',
    ],
    material_list=[
        ['NeurIPS 2023', 'https://arxiv.org/pdf/2306.02018.pdf'],
        ['Project', 'https://videocomposer.github.io/'],
        ['Code', 'https://github.com/ali-vilab/videocomposer'],
    ],
    award_name=null,
);

render_project(
    project_name='Cones2',
    figure_path='./assets/projects/cones2.jpg',
    title_name='Cones 2: Customizable Image Synthesis with Multiple Subjects',
    author_list=[
        'Zhiheng Liu', 'equal',
        'Yifei Zhang', 'equal',
        'Yujun Shen',
        'Kecheng Zheng',
        'Kai Zhu',
        'Ruili Feng',
        'Yu Liu',
        'Deli Zhao',
        'Jingren Zhou',
        'Yang Cao',
    ],
    material_list=[
        ['NeurIPS 2023', 'https://arxiv.org/pdf/2305.19327.pdf'],
        ['Project', 'https://cones-page.github.io/'],
        ['Code', 'https://github.com/ali-vilab/Cones-V2'],
    ],
    award_name=null,
);

render_project(
    project_name='GAN Evaluation',
    figure_path='./assets/projects/gan_eval.jpg',
    title_name='Revisiting the Evaluation of Image Synthesis with GANs',
    author_list=[
        'Mengping Yang', 'equal',
        'Ceyuan Yang', 'equal',
        'Yichi Zhang',
        'Qingyan Bai',
        'Yujun Shen',
        'Bo Dai',
    ],
    material_list=[
        ['NeurIPS 2023 (D&B Track)', 'https://arxiv.org/pdf/2304.01999.pdf'],
        ['Code', 'https://github.com/kobeshegu/CKA-Evaluation'],
    ],
    award_name=null,
);

render_project(
    project_name='3D Survey',
    figure_path='./assets/projects/3d_survey.jpg',
    title_name='3D Generative Models: A Survey',
    author_list=[
        'Zifan Shi', 'equal',
        'Sida Peng', 'equal',
        'Yinghao Xu', 'equal',
        'Andreas Geiger',
        'Yiyi Liao', 'corresponding',
        'Yujun Shen', 'corresponding',
    ],
    material_list=[
        ['arXiv', 'https://arxiv.org/pdf/2210.15663.pdf'],
        ['Project', 'https://github.com/justimyhxu/awesome-3D-generation'],
    ],
    award_name=null,
);

render_project(
    project_name='E-TSDM',
    figure_path='./assets/projects/e-tsdm.jpg',
    title_name='Eliminating Lipschitz Singularities in Diffusion Models',
    author_list=[
        'Zhantao Yang',
        'Ruili Feng',
        'Han Zhang',
        'Yujun Shen',
        'Kai Zhu',
        'Lianghua Huang',
        'Yifei Zhang',
        'Yu Liu',
        'Deli Zhao',
        'Jingren Zhou',
        'Fan Cheng',
    ],
    material_list=[
        ['ICLR 2024', 'https://arxiv.org/pdf/2306.11251.pdf'],
    ],
    award_name='Oral presentation',
);

render_project(
    project_name='UKnow',
    figure_path='./assets/projects/uknow.jpg',
    title_name='UKnow: A Unified Knowledge Protocol with Multimodal Knowledge Graph Datasets for Reasoning and Vision-Language Pre-Training',
    author_list=[
        'Biao Gong',
        'Shuai Tan',
        'Yutong Feng',
        'Xiaoying Xie',
        'Yuyuan Li',
        'Chaochao Chen',
        'Kecheng Zheng',
        'Yujun Shen',
        'Deli Zhao',
    ],
    material_list=[
        ['NeurIPS 2024 (D&B Track)', 'https://arxiv.org/pdf/2302.06891.pdf'],
    ],
    award_name=null,
);

render_project(
    project_name='T2S-DA',
    figure_path='./assets/projects/t2s-da.jpg',
    title_name='Pulling Target to Source: A New Perspective on Domain Adaptive Semantic Segmentation',
    author_list=[
        'Haochen Wang',
        'Yujun Shen',
        'Jingjing Fei',
        'Wei Li',
        'Liwei Wu',
        'Yuxi Wang',
        'Zhaoxiang Zhang',
    ],
    material_list=[
        ['IJCV 2024', 'https://arxiv.org/pdf/2305.13752.pdf'],
    ],
    award_name=null,
);

render_project(
    project_name='LinkGAN',
    figure_path='./assets/projects/linkgan.jpg',
    title_name='LinkGAN: Linking GAN Latents to Pixels for Controllable Image Synthesis',
    author_list=[
        'Jiapeng Zhu', 'equal',
        'Ceyuan Yang', 'equal',
        'Yujun Shen', 'equal',
        'Zifan Shi',
        'Deli Zhao',
        'Qifeng Chen',
    ],
    material_list=[
        ['ICCV 2023', 'https://arxiv.org/pdf/2301.04604.pdf'],
        ['Project', 'https://zhujiapeng.github.io/linkgan/'],
        ['Code', 'https://github.com/zhujiapeng/linkgan'],
    ],
    award_name=null,
);

render_project(
    project_name='GenDA',
    figure_path='./assets/projects/genda.jpg',
    title_name='One-Shot Generative Domain Adaptation',
    author_list=[
        'Ceyuan Yang', 'equal',
        'Yujun Shen', 'equal',
        'Zhiyi Zhang',
        'Yinghao Xu',
        'Jiapeng Zhu',
        'Zhirong Wu',
        'Bolei Zhou',
    ],
    material_list=[
        ['ICCV 2023', 'https://arxiv.org/pdf/2111.09876.pdf'],
        ['Project', 'https://genforce.github.io/genda/'],
        ['Code', 'https://github.com/genforce/genda'],
    ],
    award_name=null,
);

render_project(
    project_name='ViM',
    figure_path='./assets/projects/vim.jpg',
    title_name='ViM: Vision Middleware for Unified Downstream Transferring',
    author_list=[
        'Yutong Feng',
        'Biao Gong',
        'Jianwen Jiang',
        'Yiliang Lv',
        'Yujun Shen',
        'Deli Zhao',
        'Jingren Zhou',
    ],
    material_list=[
        ['ICCV 2023', 'https://arxiv.org/pdf/2303.06911.pdf'],
    ],
    award_name=null,
);

render_project(
    project_name='R-AMT',
    figure_path='./assets/projects/r-amt.jpg',
    title_name='Regularized Mask Tuning: Uncovering Hidden Knowledge in Pre-trained Vision-Language Models',
    author_list=[
        'Kecheng Zheng', 'equal',
        'Wei Wu', 'equal',
        'Ruili Feng',
        'Kai Zhu',
        'Jiawei Liu',
        'Deli Zhao',
        'Zheng-Jun Zha',
        'Wei Chen',
        'Yujun Shen', 'corresponding',
    ],
    material_list=[
        ['ICCV 2023', 'https://arxiv.org/pdf/2307.15049.pdf'],
        ['Project', 'https://wuw2019.github.io/R-AMT/'],
        ['Code', 'https://github.com/wuw2019/R-AMT'],
    ],
    award_name=null,
);

render_project(
    project_name='SOONet',
    figure_path='./assets/projects/soonet.jpg',
    title_name='Scanning Only Once: An End-to-end Framework for Fast Temporal Grounding in Long Videos',
    author_list=[
        'Yulin Pan',
        'Xiangteng He',
        'Biao Gong',
        'Yiliang Lv',
        'Yujun Shen',
        'Yuxin Peng',
        'Deli Zhao',
    ],
    material_list=[
        ['ICCV 2023', 'https://arxiv.org/pdf/2303.08345.pdf'],
        ['Code', 'https://github.com/afcedf/SOONet'],
    ],
    award_name=null,
);

render_project(
    project_name='Composer',
    figure_path='./assets/projects/composer.jpg',
    title_name='Composer: Creative and Controllable Image Synthesis with Composable Conditions',
    author_list=[
        'Lianghua Huang',
        'Di Chen',
        'Yu Liu',
        'Yujun Shen',
        'Deli Zhao',
        'Jingren Zhou',
    ],
    material_list=[
        ['ICML 2023', 'https://arxiv.org/pdf/2302.09778.pdf'],
        ['Project', 'https://ali-vilab.github.io/composer-page/'],
        ['Code', 'https://github.com/ali-vilab/composer'],
    ],
    award_name=null,
);

render_project(
    project_name='PoF3D',
    figure_path='./assets/projects/pof3d.jpg',
    title_name='Learning 3D-aware Image Synthesis with Unknown Pose Distribution',
    author_list=[
        'Zifan Shi', 'equal',
        'Yujun Shen', 'equal',
        'Yinghao Xu',
        'Sida Peng',
        'Yiyi Liao',
        'Sheng Guo',
        'Qifeng Chen',
        'Dit-Yan Yeung',
    ],
    material_list=[
        ['CVPR 2023', 'https://arxiv.org/pdf/2301.07702.pdf'],
        ['Project', 'https://vivianszf.github.io/pof3d/'],
        ['Code', 'https://github.com/vivianszf/pof3d'],
        ['Demo', 'https://www.youtube.com/watch?v=nvlyAElC8eE'],
    ],
    award_name=null,
);

render_project(
    project_name='DisCoScene',
    figure_path='./assets/projects/discoscene.gif',
    title_name='DiscoScene: Spatially Disentangled Generative Radiance Field for Controllable 3D-aware Scene Synthesis',
    author_list=[
        'Yinghao Xu',
        'Menglei Chai',
        'Zifan Shi',
        'Sida Peng',
        'Ivan Skorokhodov',
        'Aliaksandr Siarohin',
        'Ceyuan Yang',
        'Yujun Shen',
        'Hsin-Ying Lee',
        'Bolei Zhou',
        'Sergey Tulyakov',
    ],
    material_list=[
        ['CVPR 2023', 'https://arxiv.org/pdf/2212.11984.pdf'],
        ['Project', 'https://snap-research.github.io/discoscene/'],
        ['Code', 'https://github.com/snap-research/discoscene'],
        ['Demo', 'https://www.youtube.com/watch?v=Fvenkw7yeok'],
    ],
    award_name='Highlight presentation',
);

render_project(
    project_name='GLeaD',
    figure_path='./assets/projects/glead.jpg',
    title_name='GLeaD: Improving GANs with A Generator-Leading Task',
    author_list=[
        'Qingyan Bai',
        'Ceyuan Yang',
        'Yinghao Xu',
        'Xihui Liu',
        'Yujiu Yang',
        'Yujun Shen',
    ],
    material_list=[
        ['CVPR 2023', 'https://arxiv.org/pdf/2212.03752.pdf'],
        ['Project', 'https://ezioby.github.io/glead/'],
        ['Code', 'https://github.com/EzioBy/glead'],
    ],
    award_name=null,
);

render_project(
    project_name='VideoFusion',
    figure_path='./assets/projects/videofusion.gif',
    title_name='VideoFusion: Decomposed Diffusion Models for High-Quality Video Generation',
    author_list=[
        'Zhengxiong Luo',
        'Dayou Chen',
        'Yingya Zhang',
        'Yan Huang',
        'Liang Wang',
        'Yujun Shen',
        'Deli Zhao',
        'Jingren Zhou',
        'Tieniu Tan',
    ],
    material_list=[
        ['CVPR 2023', 'https://arxiv.org/pdf/2303.08320.pdf'],
    ],
    award_name=null,
);

render_project(
    project_name='DVDP',
    figure_path='./assets/projects/dvdp.jpg',
    title_name='Dimensionality-Varying Diffusion Process',
    author_list=[
        'Han Zhang',
        'Ruili Feng',
        'Zhantao Yang',
        'Lianghua Huang',
        'Yu Liu',
        'Yifei Zhang',
        'Yujun Shen',
        'Deli Zhao',
        'Jingren Zhou',
        'Fan Cheng',
    ],
    material_list=[
        ['CVPR 2023', 'https://arxiv.org/pdf/2211.16032.pdf'],
    ],
    award_name=null,
);

render_project(
    project_name='LipFormer',
    figure_path='./assets/projects/lipformer.jpg',
    title_name='LipFormer: High-Fidelity and Generalizable Talking Face Generation With a Pre-Learned Facial Codebook',
    author_list=[
        'Jiayu Wang',
        'Kang Zhao',
        'Shiwei Zhang',
        'Yingya Zhang',
        'Yujun Shen',
        'Deli Zhao',
        'Jingren Zhou',
    ],
    material_list=[
        ['CVPR 2023', 'https://openaccess.thecvf.com/content/CVPR2023/papers/Wang_LipFormer_High-Fidelity_and_Generalizable_Talking_Face_Generation_With_a_Pre-Learned_CVPR_2023_paper.pdf'],
    ],
    award_name=null,
);

render_project(
    project_name='Neural Dependency',
    figure_path='./assets/projects/neural_dependency.jpg',
    title_name='Neural Dependencies Emerging from Learning Massive Categories',
    author_list=[
        'Ruili Feng',
        'Kecheng Zheng',
        'Kai Zhu',
        'Yujun Shen',
        'Jian Zhao',
        'Yukun Huang',
        'Deli Zhao',
        'Jingren Zhou',
        'Michael Jordan',
        'Zheng-Jun Zha',
    ],
    material_list=[
        ['CVPR 2023', 'https://arxiv.org/pdf/2211.12339.pdf'],
    ],
    award_name=null,
);

render_project(
    project_name='BLV',
    figure_path='./assets/projects/blv.jpg',
    title_name='Balancing Logit Variation for Long-tailed Semantic Segmentation',
    author_list=[
        'Yuchao Wang',
        'Jingjing Fei',
        'Haochen Wang',
        'Wei Li',
        'Tianpeng Bao',
        'Liwei Wu',
        'Rui Zhao',
        'Yujun Shen', 'corresponding',
    ],
    material_list=[
        ['CVPR 2023', 'https://arxiv.org/pdf/2306.02061.pdf'],
        ['Code', 'https://github.com/grantword8/BLV'],
    ],
    award_name=null,
);

render_project(
    project_name='StyleSV',
    figure_path='./assets/projects/stylesv.gif',
    title_name='Towards Smooth Video Composition',
    author_list=[
        'Qihang Zhang',
        'Ceyuan Yang',
        'Yujun Shen',
        'Yinghao Xu',
        'Bolei Zhou',
    ],
    material_list=[
        ['ICLR 2023', 'https://arxiv.org/pdf/2212.07413.pdf'],
        ['Project', 'https://genforce.github.io/StyleSV/'],
        ['Code', 'https://github.com/genforce/StyleSV'],
    ],
    award_name=null,
);

render_project(
    project_name='InterClassGAN',
    figure_path='./assets/projects/interclassgan.jpg',
    title_name='Interpreting Class Conditional GANs with Channel Awareness',
    author_list=[
        'Yingqing He',
        'Zhiyi Zhang',
        'Jiapeng Zhu',
        'Yujun Shen',
        'Qifeng Chen',
    ],
    material_list=[
        ['arXiv', 'https://arxiv.org/pdf/2203.11173.pdf'],
        ['Project', 'https://yingqinghe.github.io/interclassgan/'],
        ['Code', 'https://github.com/yingqinghe/interclassgan'],
    ],
    award_name=null,
);

render_project(
    project_name='GeoD',
    figure_path='./assets/projects/geod.jpg',
    title_name='Improving 3D-aware Image Synthesis with A Geometry-aware Discriminator',
    author_list=[
        'Zifan Shi',
        'Yinghao Xu',
        'Yujun Shen',
        'Deli Zhao',
        'Qifeng Chen',
        'Dit-Yan Yeung',
    ],
    material_list=[
        ['NeurIPS 2022', 'https://arxiv.org/pdf/2209.15637.pdf'],
        ['Project', 'https://vivianszf.github.io/geod/'],
        ['Code', 'https://github.com/vivianszf/geod'],
        ['Demo', 'https://www.youtube.com/watch?v=qqAxEMSUYiE'],
    ],
    award_name='Spotlight presentation',
);

render_project(
    project_name='DynamicD',
    figure_path='./assets/projects/dynamicd.jpg',
    title_name='Improving GANs with A Dynamic Discriminator',
    author_list=[
        'Ceyuan Yang', 'equal',
        'Yujun Shen', 'equal',
        'Yinghao Xu',
        'Deli Zhao',
        'Bo Dai',
        'Bolei Zhou',
    ],
    material_list=[
        ['NeurIPS 2022', 'https://arxiv.org/pdf/2209.09897.pdf'],
        ['Project', 'https://genforce.github.io/dynamicd/'],
        ['Code', 'https://github.com/genforce/dynamicd'],
    ],
    award_name=null,
);

render_project(
    project_name='FST',
    figure_path='./assets/projects/fst.jpg',
    title_name='Learning from Future: A Novel Self-Training Framework for Semantic Segmentation',
    author_list=[
        'Ye Du',
        'Yujun Shen',
        'Haochen Wang',
        'Jingjing Fei',
        'Wei Li',
        'Liwei Wu',
        'Rui Zhao',
        'Zehua Fu',
        'Qingjie Liu',
    ],
    material_list=[
        ['NeurIPS 2022', 'https://arxiv.org/pdf/2209.06993.pdf'],
        ['Code', 'https://github.com/usr922/FST'],
    ],
    award_name=null,
);

render_project(
    project_name='UniAD',
    figure_path='./assets/projects/uniad.jpg',
    title_name='A Unified Model for Multi-class Anomaly Detection',
    author_list=[
        'Zhiyuan You', 'equal',
        'Lei Cui', 'equal',
        'Yujun Shen',
        'Kai Yang',
        'Xin Lu',
        'Yu Zheng',
        'Xinyi Le',
    ],
    material_list=[
        ['NeurIPS 2022', 'https://arxiv.org/pdf/2206.03687.pdf'],
        ['Code', 'https://github.com/zhiyuanyou/UniAD'],
    ],
    award_name='Spotlight presentation',
);

render_project(
    project_name='DepthGAN',
    figure_path='./assets/projects/depthgan.jpg',
    title_name='3D-aware Indoor Scene Synthesis with Depth Priors',
    author_list=[
        'Zifan Shi',
        'Jiapeng Zhu',
        'Yujun Shen',
        'Yinghao Xu',
        'Deli Zhao',
        'Qifeng Chen',
    ],
    material_list=[
        ['ECCV 2022', 'https://arxiv.org/pdf/2202.08553.pdf'],
        ['Project', 'https://vivianszf.github.io/depthgan/'],
        ['Code', 'https://github.com/vivianszf/depthgan'],
        ['Demo', 'https://www.youtube.com/watch?v=RMmIso5Oxno'],
    ],
    award_name='Oral presentation',
);

render_project(
    project_name='PadInv',
    figure_path='./assets/projects/padinv.jpg',
    title_name='High-fidelity GAN Inversion with Padding Space',
    author_list=[
        'Qingyan Bai', 'equal',
        'Yinghao Xu', 'equal',
        'Jiapeng Zhu',
        'Weihao Xia',
        'Yujiu Yang',
        'Yujun Shen',
    ],
    material_list=[
        ['ECCV 2022', 'https://arxiv.org/pdf/2203.11105.pdf'],
        ['Project', 'https://ezioby.github.io/padinv/'],
        ['Code', 'https://github.com/ezioby/padinv'],
    ],
    award_name=null,
);

render_project(
    project_name='ReSeFa',
    figure_path='./assets/projects/resefa.jpg',
    title_name='Region-Based Semantic Factorization in GANs',
    author_list=[
        'Jiapeng Zhu',
        'Yujun Shen',
        'Yinghao Xu',
        'Deli Zhao',
        'Qifeng Chen',
    ],
    material_list=[
        ['ICML 2022', 'https://arxiv.org/pdf/2112.10759.pdf'],
        ['Project', 'https://zhujiapeng.github.io/resefa/'],
        ['Code', 'https://github.com/zhujiapeng/resefa'],
        ['Colab', 'https://colab.research.google.com/github/zhujiapeng/resefa/blob/main/docs/resefa.ipynb'],
    ],
    award_name=null,
);

render_project(
    project_name='VolumeGAN',
    figure_path='./assets/projects/volumegan.jpg',
    title_name='3D-aware Image Synthesis via Learning Structural and Textural Representations',
    author_list=[
        'Yinghao Xu',
        'Sida Peng',
        'Ceyuan Yang',
        'Yujun Shen',
        'Bolei Zhou',
    ],
    material_list=[
        ['CVPR 2022', 'https://arxiv.org/pdf/2112.10759.pdf'],
        ['Project', 'https://genforce.github.io/volumegan/'],
        ['Code', 'https://github.com/genforce/volumegan'],
        ['Demo', 'https://www.youtube.com/watch?v=p85TVGJBMFc'],
    ],
    award_name=null,
);

render_project(
    project_name='EqGAN',
    figure_path='./assets/projects/eqgan.gif',
    title_name='Improving GAN Equilibrium by Raising Spatial Awareness',
    author_list=[
        'Jianyuan Wang',
        'Ceyuan Yang',
        'Yinghao Xu',
        'Yujun Shen',
        'Hongdong Li',
        'Bolei Zhou',
    ],
    material_list=[
        ['CVPR 2022', 'https://arxiv.org/pdf/2112.00718.pdf'],
        ['TPAMI 2024', 'https://arxiv.org/pdf/2301.08455.pdf'],
        ['Project', 'https://genforce.github.io/eqgan-sa/'],
        ['Code', 'https://github.com/genforce/eqgan-sa'],
        ['Demo', 'https://www.youtube.com/watch?v=k7sG4XY5rIc'],
    ],
    award_name=null,
);

render_project(
    project_name='CMPL',
    figure_path='./assets/projects/cmpl.jpg',
    title_name='Cross-Model Pseudo-Labeling for Semi-Supervised Action Recognition',
    author_list=[
        'Yinghao Xu',
        'Fangyun Wei',
        'Xiao Sun',
        'Ceyuan Yang',
        'Yujun Shen',
        'Bo Dai',
        'Bolei Zhou',
        'Stephen Lin',
    ],
    material_list=[
        ['CVPR 2022', 'https://arxiv.org/pdf/2112.09690.pdf'],
        ['Project', 'https://justimyhxu.github.io/projects/cmpl/'],
    ],
    award_name='Oral presentation',
);

render_project(
    project_name='U2PL',
    figure_path='./assets/projects/u2pl.jpg',
    title_name='Semi-Supervised Semantic Segmentation Using Unreliable Pseudo-Labels',
    author_list=[
        'Yuchao Wang', 'equal',
        'Haochen Wang', 'equal',
        'Yujun Shen',
        'Jingjing Fei',
        'Wei Li',
        'Guoqiang Jin',
        'Liwei Wu',
        'Rui Zhao',
        'Xinyi Le',
    ],
    material_list=[
        ['CVPR 2022', 'https://arxiv.org/pdf/2203.03884.pdf'],
        ['IJCV 2024', 'https://arxiv.org/pdf/2306.02314.pdf'],
        ['Project', 'https://haochen-wang409.github.io/U2PL/'],
        ['Code', 'https://github.com/haochen-wang409/U2PL'],
    ],
    award_name=null,
);

render_project(
    project_name='InsGen',
    figure_path='./assets/projects/insgen.jpg',
    title_name='Data-Efficient Instance Generation from Instance Discrimination',
    author_list=[
        'Ceyuan Yang',
        'Yujun Shen',
        'Yinghao Xu',
        'Bolei Zhou',
    ],
    material_list=[
        ['NeurIPS 2021', 'https://arxiv.org/pdf/2106.04566.pdf'],
        ['Project', 'https://genforce.github.io/insgen/'],
        ['Code', 'https://github.com/genforce/insgen'],
    ],
    award_name=null,
);

render_project(
    project_name='LowRankGAN',
    figure_path='./assets/projects/lowrankgan.jpg',
    title_name='Low-Rank Subspaces in GANs',
    author_list=[
        'Jiapeng Zhu',
        'Ruili Feng',
        'Yujun Shen',
        'Deli Zhao',
        'Zheng-Jun Zha',
        'Jingren Zhou',
        'Qifeng Chen',
    ],
    material_list=[
        ['NeurIPS 2021', 'https://arxiv.org/pdf/2106.04488.pdf'],
        ['Project', 'https://zhujiapeng.github.io/LowRankGAN/'],
        ['Code', 'https://github.com/zhujiapeng/lowrankgan'],
    ],
    award_name=null,
);

render_project(
    project_name='TrGAN',
    figure_path='./assets/projects/trgan.gif',
    title_name='Unsupervised Image Transformation Learning via Generative Adversarial Networks',
    author_list=[
        'Kaiwen Zha',
        'Yujun Shen',
        'Bolei Zhou',
    ],
    material_list=[
        ['arXiv', 'https://arxiv.org/pdf/2103.07751.pdf'],
        ['Project', 'https://genforce.github.io/trgan/'],
        ['Code', 'https://github.com/genforce/trgan'],
        ['Demo', 'https://www.youtube.com/watch?v=ZTYLihZYwYM'],
    ],
    award_name=null,
);

render_project(
    project_name='FairGen',
    figure_path='./assets/projects/fairgen.jpg',
    title_name='Improving the Fairness of Deep Generative Models without Retraining',
    author_list=[
        'Shuhan Tan',
        'Yujun Shen',
        'Bolei Zhou',
    ],
    material_list=[
        ['arXiv', 'https://arxiv.org/pdf/2012.04842.pdf'],
        ['Project', 'https://genforce.github.io/fairgen/'],
        ['Code', 'https://github.com/genforce/fairgen'],
        ['Colab', 'https://colab.research.google.com/github/genforce/fairgen/blob/main/docs/fairgen.ipynb'],
    ],
    award_name=null,
);

render_project(
    project_name='GH-Feat',
    figure_path='./assets/projects/gh-feat.jpg',
    title_name='Generative Hierarchical Features from Synthesizing Images',
    author_list=[
        'Yinghao Xu', 'equal',
        'Yujun Shen', 'equal',
        'Jiapeng Zhu',
        'Ceyuan Yang',
        'Bolei Zhou',
    ],
    material_list=[
        ['CVPR 2021', 'https://arxiv.org/pdf/2007.10379.pdf'],
        ['TPAMI 2022', 'https://arxiv.org/pdf/2301.05315.pdf'],
        ['Project', 'https://genforce.github.io/ghfeat/'],
        ['Code', 'https://github.com/genforce/ghfeat'],
    ],
    award_name='Oral presentation',
);

render_project(
    project_name='SeFa',
    figure_path='./assets/projects/sefa.gif',
    title_name='Closed-Form Factorization of Latent Semantics in GANs',
    author_list=[
        'Yujun Shen',
        'Bolei Zhou',
    ],
    material_list=[
        ['CVPR 2021', 'https://arxiv.org/pdf/2007.06600.pdf'],
        ['Project', 'https://genforce.github.io/sefa/'],
        ['Code', 'https://github.com/genforce/sefa'],
        ['Demo', 'https://www.youtube.com/watch?v=OFHW2WbXXIQ'],
    ],
    award_name='Oral presentation',
);

render_project(
    project_name='Glancing at Patch',
    figure_path='./assets/projects/glancing_at_patch.jpg',
    title_name='Glancing at the Patch: Anomaly Localization with Global and Local Feature Comparison',
    author_list=[
        'Shenzhi Wang',
        'Liwei Wu',
        'Lei Cui',
        'Yujun Shen', 'corresponding',
    ],
    material_list=[
        ['CVPR 2021', 'https://openaccess.thecvf.com/content/CVPR2021/papers/Wang_Glancing_at_the_Patch_Anomaly_Localization_With_Global_and_Local_CVPR_2021_paper.pdf'],
    ],
    award_name=null,
);

render_project(
    project_name='CompConv',
    figure_path='./assets/projects/compconv.jpg',
    title_name='CompConv: A Compact Convolution Module for Efficient Feature Learning',
    author_list=[
        'Chen Zhang',
        'Yinghao Xu',
        'Yujun Shen', 'corresponding',
    ],
    material_list=[
        ['CVPRW 2021', 'https://arxiv.org/pdf/2106.10486.pdf'],
    ],
    award_name=null,
);

render_project(
    project_name='LoGAN',
    figure_path='./assets/projects/logan.jpg',
    title_name='Decorating Your Own Bedroom: Locally Controlling Image Generation with Generative Adversarial Networks',
    author_list=[
        'Chen Zhang',
        'Yinghao Xu',
        'Yujun Shen', 'corresponding',
    ],
    material_list=[
        ['CVPRW 2021', 'https://arxiv.org/pdf/2105.08222.pdf'],
    ],
    award_name=null,
);

render_project(
    project_name='HiGAN',
    figure_path='./assets/projects/higan.gif',
    title_name='Semantic Hierarchy Emerges in Deep Generative Representations for Scene Synthesis',
    author_list=[
        'Ceyuan Yang', 'equal',
        'Yujun Shen', 'equal',
        'Bolei Zhou',
    ],
    material_list=[
        ['IJCV 2021', 'https://arxiv.org/pdf/1911.09267.pdf'],
        ['Project', 'https://genforce.github.io/higan/'],
        ['Code', 'https://github.com/genforce/higan'],
        ['Demo', 'https://www.youtube.com/watch?v=X5yWu2Jwjpg'],
        ['Colab', 'https://colab.research.google.com/github/genforce/higan/blob/master/docs/HiGAN_Bedroom.ipynb'],
    ],
    award_name=null,
);

render_project(
    project_name='IDInvert',
    figure_path='./assets/projects/idinvert.gif',
    title_name='In-Domain GAN Inversion for Real Image Editing',
    author_list=[
        'Jiapeng Zhu', 'equal',
        'Yujun Shen', 'equal',
        'Deli Zhao',
        'Bolei Zhou',
    ],
    material_list=[
        ['ECCV 2020', 'https://arxiv.org/pdf/2004.00049.pdf'],
        ['TPAMI 2024', 'https://arxiv.org/pdf/2309.13956.pdf'],
        ['Project', 'https://genforce.github.io/idinvert/'],
        ['Code (TensorFlow)', 'https://github.com/genforce/idinvert'],
        ['Code (PyTorch)', 'https://github.com/genforce/idinvert_pytorch'],
        ['Demo', 'https://www.youtube.com/watch?v=3v6NHrhuyFY'],
        ['Colab', 'https://colab.research.google.com/github/genforce/idinvert_pytorch/blob/master/docs/Idinvert.ipynb'],
    ],
    award_name=null,
);

render_project(
    project_name='InterFaceGAN',
    figure_path='./assets/projects/interfacegan.gif',
    title_name='InterFaceGAN: Interpreting the Disentangled Face Representation Learned by GANs',
    author_list=[
        'Yujun Shen',
        'Ceyuan Yang',
        'Xiaoou Tang',
        'Bolei Zhou',
    ],
    material_list=[
        ['CVPR 2020', 'https://arxiv.org/pdf/1907.10786.pdf'],
        ['TPAMI 2020', 'https://arxiv.org/pdf/2005.09635.pdf'],
        ['Project', 'https://genforce.github.io/interfacegan/'],
        ['Code', 'https://github.com/genforce/interfacegan'],
        ['Demo', 'https://www.youtube.com/watch?v=uoftpl3Bj6w'],
        ['Colab', 'https://colab.research.google.com/github/genforce/interfacegan/blob/master/docs/InterFaceGAN.ipynb'],
    ],
    award_name=null,
);

render_project(
    project_name='mGANprior',
    figure_path='./assets/projects/mganprior.jpg',
    title_name='Image Processing Using Multi-Code GAN Prior',
    author_list=[
        'Jinjin Gu',
        'Yujun Shen',
        'Bolei Zhou',
    ],
    material_list=[
        ['CVPR 2020', 'https://arxiv.org/pdf/1912.07116.pdf'],
        ['Project', 'https://genforce.github.io/mganprior/'],
        ['Code', 'https://github.com/genforce/mganprior'],
    ],
    award_name=null,
);

render_project(
    project_name='FaceID-GAN',
    figure_path='./assets/projects/faceidgan.jpg',
    title_name='FaceID-GAN: Learning a Symmetry Three-Player GAN for Identity-Preserving Face Synthesis',
    author_list=[
        'Yujun Shen',
        'Ping Luo',
        'Junjie Yan',
        'Xiaogang Wang',
        'Xiaoou Tang',
    ],
    material_list=[
        ['CVPR 2018', 'http://openaccess.thecvf.com/content_cvpr_2018/papers/Shen_FaceID-GAN_Learning_a_CVPR_2018_paper.pdf'],
        ['Demo', 'https://www.youtube.com/watch?v=EDahz2ppTYY'],
    ],
    award_name=null,
);

render_project(
    project_name='FaceFeat-GAN',
    figure_path='./assets/projects/facefeatgan.jpg',
    title_name='FaceFeat-GAN: a Two-Stage Approach for Identity-Preserving Face Synthesis',
    author_list=[
        'Yujun Shen',
        'Bolei Zhou',
        'Ping Luo',
        'Xiaoou Tang',
    ],
    material_list=[
        ['arXiv', 'https://arxiv.org/pdf/1812.01288.pdf'],
    ],
    award_name=null,
);

render_project(
    project_name='RKD',
    figure_path='./assets/projects/rkd.jpg',
    title_name='Residual Knowledge Distillation',
    author_list=[
        'Mengya Gao',
        'Yujun Shen',
        'Quanquan Li',
        'Chen Change Loy',
    ],
    material_list=[
        ['arXiv', 'https://arxiv.org/pdf/2002.09168.pdf'],
    ],
    award_name=null,
);

render_project(
    project_name='SSKD',
    figure_path='./assets/projects/sskd.jpg',
    title_name='An Embarrassingly Simple Approach for Knowledge Distillation',
    author_list=[
        'Mengya Gao', 'equal',
        'Yujun Shen', 'equal',
        'Quanquan Li',
        'Junjie Yan',
        'Liang Wan',
        'Dahua Lin',
        'Chen Change Loy',
        'Xiaoou Tang',
    ],
    material_list=[
        ['arXiv', 'https://arxiv.org/pdf/1812.01819.pdf'],
    ],
    award_name=null,
);










// Authors.

render_author('Aliaksandr Siarohin', 'https://aliaksandrsiarohin.github.io/aliaksandr-siarohin-website/');
render_author('Andreas Geiger', 'https://www.cvlibs.net/');
render_author('Ao Ma');
render_author('Biao Gong', 'https://scholar.google.com/citations?user=BwdpTiQAAAAJ');
render_author('Bin Tan', 'https://icetttb.github.io/');
render_author('Bo Dai', 'http://daibo.info/');
render_author('Bolei Zhou', 'https://boleizhou.github.io/');
render_author('Boming Zhao', 'https://scholar.google.com/citations?user=krMWXqMAAAAJ');
render_author('Ceyuan Yang', 'https://ceyuan.me/');
render_author('Changsong Lei');
render_author('Changxin Gao', 'https://sites.google.com/site/changxingao');
render_author('Chaochao Chen', 'https://sites.google.com/site/ccchomepage/?pli=1');
render_author('Chaojie Mao', 'https://maochaojie.github.io/');
render_author('Chen Change Loy', 'https://www.mmlab-ntu.com/person/ccloy/');
render_author('Chen Zhang');
render_author('Chen-Wei Xie', 'https://scholar.google.com/citations?user=UHCDCRMAAAAJ');
render_author('Chunhua Shen', 'https://cshen.github.io/');
render_author('Dahua Lin', 'http://dahua.site/');
render_author('Dandan Zheng');
render_author('Dayou Chen');
render_author('Deli Zhao', 'https://zhaodeli.github.io/');
render_author('Di Chen', 'https://scholar.google.com/citations?user=Ht9e9D4AAAAJ');
render_author('Dit-Yan Yeung', 'https://sites.google.com/view/dyyeung');
render_author('Fan Cheng', 'https://scholar.google.com/citations?user=sFfkf94AAAAJ');
render_author('Fan Lu');
render_author('Fangyun Wei', 'https://scholar.google.com/citations?user=-ncz2s8AAAAJ');
render_author('Gordon Wetzstein', 'https://stanford.edu/~gordonwz/');
render_author('Guangzhao He');
render_author('Gui-Song Xia', 'https://scholar.google.com/citations?user=SAUCVsEAAAAJ');
render_author('Guoqiang Jin');
render_author('Han Zhang');
render_author('Hangjie Yuan', 'https://scholar.google.com/citations?user=jQ3bFDMAAAAJ');
render_author('Hanlei Guo');
render_author('Hanlin Wang', 'https://scholar.google.com/citations?user=0uO4fzkAAAAJ');
render_author('Hansheng Chen', 'https://lakonik.github.io/');
render_author('Hao Chen', 'https://scholar.google.com/citations?user=FaOqRpcAAAAJ');
render_author('Hao Ouyang', 'https://ken-ouyang.github.io/');
render_author('Haochen Wang', 'https://haochen-wang409.github.io/');
render_author('Haotong Lin', 'https://haotongl.github.io/');
render_author('Haoyu Guo', 'https://scholar.google.com/citations?user=56yI64J5Ot8C');
render_author('He Zhu', 'https://github.com/Ada4321');
render_author('Hengshuang Zhao', 'https://hszhao.github.io/');
render_author('Hsin-Ying Lee', 'http://hsinyinglee.com/');
render_author('Hongdong Li', 'https://scholar.google.com/citations?user=Mq89JAcAAAAJ');
render_author('Hongrui Cai', 'https://rainbowrui.github.io/');
render_author('Hongyu Liu', 'https://kumapowerliu.github.io/');
render_author('Hongyu Zhou');
render_author('Huaijin Pi', 'https://phj128.github.io/');
render_author('Huamin Qu', 'http://huamin.org/');
render_author('Hujun Bao', 'http://www.cad.zju.edu.cn/home/bao/');
render_author('Ivan Skorokhodov', 'https://universome.github.io/');
render_author('James Tompkin', 'https://jamestompkin.com/');
render_author('Jiafei Li');
render_author('Jiahao Shao', 'https://jhaoshao.github.io/');
render_author('Jiamin Xu', 'https://superxjm.github.io/');
render_author('Jiaming Sun', 'https://jiamingsun.ml/');
render_author('Jian Zhao');
render_author('Jianwen Jiang');
render_author('Jianyuan Wang', 'https://jytime.github.io/');
render_author('Jiapeng Zhu', 'https://scholar.google.com/citations?user=-ACBm-gAAAAJ');
render_author('Jiawei Liu', 'https://scholar.google.com/citations?user=sR7Sf2YAAAAJ');
render_author('Jiayu Wang');
render_author('Jie Xiao', 'https://jiexiaou.github.io/');
render_author('Jing Liao', 'https://www.cityu.edu.hk/stfprofile/jingliao.htm');
render_author('Jingdong Chen', 'https://scholar.google.com/citations?user=8SCEv-YAAAAJ');
render_author('Jingjing Fei', 'https://scholar.google.com/citations?user=vSM7n_UAAAAJ');
render_author('Jingren Zhou', 'https://scholar.google.com/citations?user=64zxhRUAAAAJ');
render_author('Jinjin Gu', 'https://scholar.google.com/citations?user=uMQ-G-QAAAAJ');
render_author('Jiuniu Wang', 'https://scholar.google.com/citations?user=wcOO6hgAAAAJ');
render_author('Junjie Yan', 'https://scholar.google.com/citations?user=rEYarG0AAAAJ');
render_author('Juntao Zhang', 'https://scholar.google.com/citations?user=0DmNqeQAAAAJ');
render_author('Ka Leong Cheng', 'https://felixcheng97.github.io/');
render_author('Kai Yang', 'https://scholar.google.com/citations?user=s5Z6X0cAAAAJ');
render_author('Kai Zhu', 'https://scholar.google.com/citations?user=Mo_2YsgAAAAJ');
render_author('Kaiwen Zha', 'https://scholar.google.com/citations?user=xLFtb08AAAAJ');
render_author('Kang Zhao', 'https://scholar.google.com/citations?user=02H8RBIAAAAJ');
render_author('Kecheng Zheng', 'https://zkcys001.github.io/');
render_author('Lei Cui');
render_author('Liang Dong', 'https://scholar.google.com/citations?user=bljZpIAAAAAJ');
render_author('Liang Wan');
render_author('Liang Wang', 'https://scholar.google.com/citations?user=8kzzUboAAAAJ');
render_author('Lianghua Huang', 'https://scholar.google.com/citations?user=JYVCn3AAAAAJ');
render_author('Limin Wang', 'https://wanglimin.github.io/');
render_author('Lin Zeng');
render_author('Linzhan Mou', 'https://scholar.google.com/citations?user=cIXq7Z4AAAAJ');
render_author('Liwei Wu', 'https://scholar.google.com/citations?user=dg1JyaUAAAAJ');
render_author('Matteo Poggi', 'https://mattpoggi.github.io/');
render_author('Mengfei Xia', 'https://thuxmf.github.io/');
render_author('Menglei Chai', 'https://mlchai.com/');
render_author('Mengping Yang');
render_author('Mengting Chen', 'https://mengtingchen.github.io/');
render_author('Mengya Gao');
render_author('Michael Jordan', 'http://people.eecs.berkeley.edu/~jordan/');
render_author('Ming Yang', 'https://scholar.google.com/citations?user=uBHJx08AAAAJ');
render_author('Minghui Yang');
render_author('Nan Xue', 'https://xuenan.net/');
render_author('Nong Sang', 'https://scholar.google.com/citations?user=ky_ZowEAAAAJ');
render_author('Ping Luo', 'http://luoping.me/');
render_author('Qianqian Wang', 'https://qianqianwang68.github.io/');
render_author('Qifeng Chen', 'https://cqf.io/');
render_author('Qihang Zhang', 'https://zqh0253.github.io');
render_author('Qing Shuai', 'https://chingswy.github.io/');
render_author('Qingjie Liu', 'https://scholar.google.com/citations?user=HsLdRZYAAAAJ');
render_author('Qingpei Guo', 'https://scholar.google.com/citations?user=11HDEbkAAAAJ');
render_author('Qingyan Bai', 'https://scholar.google.com/citations?user=xUMjxi4AAAAJ');
render_author('Qinying Liu', 'https://scholar.google.com/citations?user=m8Wioy0AAAAJ');
render_author('Qiuyu Wang', 'https://github.com/qiuyu96');
render_author('Qixing Huang', 'https://www.cs.utexas.edu/~huangqx/');
render_author('Quanquan Li', 'https://scholar.google.com/citations?user=EPY8z0UAAAAJ');
render_author('Ran Yi', 'https://yiranran.github.io/');
render_author('Rui Ma', 'https://ruim-jlu.github.io/');
render_author('Rui Yu', 'https://ruiyu0.github.io/');
render_author('Rui Zhao', 'https://scholar.google.com/citations?user=1c9oQNMAAAAJ');
render_author('Ruili Feng');
render_author('Ruizhen Hu', 'https://csse.szu.edu.cn/staff/ruizhenhu/');
render_author('Sergey Tulyakov', 'http://www.stulyakov.com/');
render_author('Shangzhan Zhang', 'https://zhanghe3z.github.io/');
render_author('Sheng Guo', 'https://scholar.google.com/citations?user=mbpgOmEAAAAJ');
render_author('Shenghua Gao', 'https://scholar.google.com/citations?user=fe-1v0MAAAAJ');
render_author('Shenzhi Wang', 'https://shenzhi-wang.github.io/');
render_author('Shilong Zhang', 'https://jshilong.github.io/');
render_author('Shiwei Zhang', 'https://scholar.google.com/citations?user=ZO3OQ-8AAAAJ');
render_author('Shuai Tan', 'https://tanshuai0219.github.io/');
render_author('Shuailei Ma', 'https://scholar.google.com/citations?user=dNhzCu4AAAAJ');
render_author('Shuhan Tan', 'https://ariostgx.github.io/website/');
render_author('Shuwei Shi', 'https://shuweis.github.io/');
render_author('Shuzhe Wang', 'https://ffrivera0.github.io/');
render_author('Sida Peng', 'https://pengsida.net/');
render_author('Stephen Lin', 'https://scholar.google.com/citations?user=c3PYmxUAAAAJ');
render_author('Tao Xie');
render_author('Tao Xu');
render_author('Tianfu Wu', 'https://scholar.google.com/citations?user=V3efzbgAAAAJ');
render_author('Tianpeng Bao');
render_author('Tianrun Chen', 'https://tianrun-chen.github.io/');
render_author('Tieliang Gong', 'https://gong-tl.github.io/');
render_author('Tieniu Tan', 'https://scholar.google.com/citations?user=W-FGd_UAAAAJ');
render_author('Wei Chen', 'http://www.cad.zju.edu.cn/home/chenwei/');
render_author('Wei Li', 'https://bigballon.github.io/');
render_author('Wei Wang');
render_author('Wei Wu', 'https://scholar.google.com/citations?user=-Nv9XWAAAAAJ');
render_author('Wei Zhai', 'https://scholar.google.com/citations?user=UI5_qZcAAAAJ');
render_author('Weihao Xia', 'https://scholar.google.com/citations?user=Egqp5AMAAAAJ');
render_author('Weiwei Xu', 'http://www.cad.zju.edu.cn/home/weiweixu/weiweixu_en.htm');
render_author('Wen Wang', 'https://scholar.google.com/citations?user=1ks0R04AAAAJ');
render_author('Wenping Wang', 'https://scholar.google.com/citations?user=28shvv0AAAAJ');
render_author('Xi Chen', 'https://xavierchen34.github.io/');
render_author('Xi Chen ZJU', null, 'Xi Chen');
render_author('Xiang Wang', 'https://scholar.google.com/citations?user=cQbXvkcAAAAJ');
render_author('Xiangteng He', 'https://scholar.google.com/citations?user=37RO0eYAAAAJ');
render_author('Xiaogang Wang', 'https://scholar.google.com/citations?user=-B5JgjsAAAAJ');
render_author('Xiao Sun', 'https://jimmysuen.github.io/');
render_author('Xiaoou Tang', 'https://scholar.google.com/citations?user=qpBtpGsAAAAJ');
render_author('Xiaowei Zhou', 'https://xzhou.me/');
render_author('Xiaoying Xie');
render_author('Xihui Liu', 'https://xh-liu.github.io/');
render_author('Xin Jin', 'https://scholar.google.com/citations?user=byaSC-kAAAAJ');
render_author('Xin Lu', 'https://scholar.google.com/citations?user=lSjgoHwAAAAJ');
render_author('Xin Zhang');
render_author('Xingyi He', 'https://scholar.google.com.hk/citations?user=QsI5jawAAAAJ');
render_author('Xinya Chen', 'https://xinyachen21.github.io/');
render_author('Xinyang Li', 'https://scholar.google.com.hk/citations?user=M9rwkHwAAAAJ');
render_author('Xinyi Le', 'https://scholar.google.com/citations?user=MGZyMf4AAAAJ');
render_author('Xiuchao Wu', 'https://xchaowu.github.io/');
render_author('Xuan Wang', 'https://xuanwangvc.github.io/');
render_author('Xueyang Fu', 'https://scholar.google.com/citations?user=tFNDn5EAAAAJ');
render_author('Yan Huang', 'https://scholar.google.com/citations?user=6nUJrQ0AAAAJ');
render_author('Yanbo Fan', 'https://sites.google.com/site/yanbofan0124/');
render_author('Yang Cao', 'https://scholar.google.com/citations?user=K7rTHNcAAAAJ');
render_author('Yanrui Bin');
render_author('Ye Du', 'https://usr922.github.io/');
render_author('Yibing Song', 'https://ybsong00.github.io/');
render_author('Yichi Zhang');
render_author('Yifan Wang', 'https://yifita.netlify.app/');
render_author('Yifei Zhang');
render_author('Yifeng Ma');
render_author('Yihao Meng', 'https://yihao-meng.github.io/');
render_author('Yiliang Lv');
render_author('Yiman Xie');
render_author('Yinda Zhang', 'https://www.zhangyinda.com/');
render_author('Ying Wei', 'http://faculty.neu.edu.cn/weiying/en/index.htm');
render_author('Yinghao Xu', 'https://justimyhxu.github.io/');
render_author('Yingqing He', 'https://scholar.google.com/citations?user=UDiGYN8AAAAJ');
render_author('Yingya Zhang', 'https://scholar.google.com/citations?user=16RDSEUAAAAJ');
render_author('Yiyang Wang');
render_author('Yiyi Liao', 'https://yiyiliao.github.io/');
render_author('Yong-Jin Liu', 'https://cg.cs.tsinghua.edu.cn/people/~Yongjin/Yongjin.htm');
render_author('Youmin Zhang', 'https://youmi-zym.github.io/');
render_author('Yu Liu', 'https://scholar.google.com/citations?user=8zksQb4AAAAJ');
render_author('Yu Zheng');
render_author('Yu Zhou');
render_author('Yuan Li', 'https://y-u-a-n-l-i.github.io/');
render_author('Yuanbo Yang');
render_author('Yuang Wang', 'https://scholar.google.com/citations?user=uLTRoSsAAAAJ');
render_author('Yuchao Wang');
render_author('Yudong Jin');
render_author('Yue Wang', 'https://ywang-zju.github.io/');
render_author('Yue Yu', 'https://bruceyy.com/');
render_author('Yujian Zhang');
render_author('Yujiu Yang', 'https://scholar.google.com/citations?user=4gH3sxsAAAAJ');
render_author('Yujun Shen');
render_author('Yukun Huang', 'https://scholar.google.com/citations?user=lHb5gzoAAAAJ');
render_author('Yulin Pan');
render_author('Yunzhi Yan', 'https://scholar.google.com/citations?user=_kvj3i8AAAAJ');
render_author('Yuting Xiao', 'https://svip-lab.github.io/team/xiaoyt.html');
render_author('Yutong Feng', 'https://scholar.google.com/citations?user=mZwJLeUAAAAJ');
render_author('Yuxi Wang', 'https://scholar.google.com/citations?user=waLCodcAAAAJ');
render_author('Yuxi Xiao', 'https://henry123-boy.github.io/');
render_author('Yuxin Guo', 'https://scholar.google.com/citations?user=x_0spxgAAAAJ');
render_author('Yuxin Peng', 'https://scholar.google.com/citations?user=mFsXPNYAAAAJ');
render_author('Yuyuan Li', 'https://scholar.google.com/citations?user=v4e49qEAAAAJ');
render_author('Zehua Fu', 'https://scholar.google.com/citations?user=Ug8JzsAAAAAJ');
render_author('Zeyinzi Jiang');
render_author('Zhan Tong', 'https://scholar.google.com/citations?user=6FsgWBMAAAAJ');
render_author('Zhantao Yang');
render_author('Zhaopeng Cui', 'https://zhpcui.github.io/');
render_author('Zhaoxiang Zhang', 'https://zhaoxiangzhang.net/');
render_author('Zhekai Chen', 'https://scholar.google.com/citations?user=_eZWcIMAAAAJ');
render_author('Zhen Xu', 'https://zhenx.me/');
render_author('Zhengxiong Luo', 'https://scholar.google.com/citations?user=Sz1yTZsAAAAJ');
render_author('Zheng-Jun Zha', 'https://en.auto.ustc.edu.cn/2021/0616/c26828a513174/page.htm');
render_author('Zhi Cen', 'https://scholar.google.com/citations?user=Xyy-uFMAAAAJ');
render_author('Zhiheng Liu', 'https://johanan528.github.io/');
render_author('Zhirong Wu', 'https://scholar.google.com/citations?user=lH4zgcIAAAAJ');
render_author('Zhiwu Qing', 'https://scholar.google.com/citations?user=q9refl4AAAAJ');
render_author('Zhiyi Zhang', 'https://www.brando.dev/');
render_author('Zhiyuan You', 'https://scholar.google.com/citations?user=YRnwvDwAAAAJ');
render_author('Zhi-Fan Wu');
render_author('Zichen Liu', 'https://zliucz.github.io/');
render_author('Zifan Shi', 'https://vivianszf.github.io/');
render_author('Zilei Wang', 'https://scholar.google.com/citations?user=tMO7jm4AAAAJ');
render_author('Ziyu Sun');
render_author('Ziyu Wan', 'http://raywzy.com/');
render_author('Ziyuan Huang', 'https://huang-ziyuan.github.io/');
